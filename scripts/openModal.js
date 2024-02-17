const modal = document.getElementById("fullscreen-modal");
const fullScreenImage = document.getElementById("fullscreen-image");

function openModal(src) {
  fullScreenImage.src = src;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

document.querySelectorAll(".preview-card .preview-image").forEach((image) => {
  image.addEventListener("click", () => openModal(image.src));
});

modal.addEventListener("click", closeModal);

fullScreenImage.addEventListener("click", (event) => event.stopPropagation());
