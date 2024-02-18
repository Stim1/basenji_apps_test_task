document.addEventListener("DOMContentLoaded", function () {
  const secondBlock = document.getElementById("secondBlock");
  const stickyHeader = document.getElementById("stickyHeader");

  function checkScroll() {
    const secondBlockOffset =
      secondBlock.getBoundingClientRect().top + window.pageYOffset;
    const headerHeight = stickyHeader.offsetHeight;

    if (window.pageYOffset > secondBlockOffset - headerHeight) {
      stickyHeader.classList.add("active");
    } else {
      stickyHeader.classList.remove("active");
    }
  }

  checkScroll();

  window.addEventListener("scroll", checkScroll);
});
