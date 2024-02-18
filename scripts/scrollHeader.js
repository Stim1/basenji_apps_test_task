document.addEventListener("DOMContentLoaded", function () {
  const secondBlock = document.getElementById("secondBlock");
  const stickyHeader = document.getElementById("stickyHeader");

  function checkScroll() {
    const secondBlockOffset =
      secondBlock.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight = stickyHeader.offsetHeight; // Висота хедера, якщо потрібно

    if (window.pageYOffset > secondBlockOffset - headerHeight) {
      stickyHeader.classList.add("active");
    } else {
      stickyHeader.classList.remove("active");
    }
  }

  // Перевіряємо прокрутку при завантаженні сторінки
  checkScroll();

  // Встановлюємо обробник події на прокрутку
  window.addEventListener("scroll", checkScroll);
});
