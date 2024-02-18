document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".full-comment-btn");
  const modal = document.getElementById("myModal");
  const modalContent = modal.querySelector(".full-comment");

  btns.forEach(function (btn) {
    btn.onclick = function () {
      const fullCommentHtml = this.closest(".comment").innerHTML;
      modalContent.innerHTML = fullCommentHtml;
      modal.style.display = "block";

      const moreButton = modalContent.querySelector(".full-comment-btn");
      if (moreButton) {
        moreButton.style.display = "none";
      }
    };
  });

  const closeBtn = document.querySelector(".close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
