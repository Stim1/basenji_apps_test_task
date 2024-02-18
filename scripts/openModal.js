const modal = document.getElementById("fullscreen-modal");
const fullScreenImage = document.getElementById("fullscreen-image");

function openModal(src) {
  fullScreenImage.src = src;
  modal.style.display = "flex";

  console.log("Opening modal with image src:", src);

  logEvent({
    event: "modal_open",
    button_id: src,
  });
}

function closeModal() {
  modal.style.display = "none";

  console.log("Closing modal");

  logEvent({
    event: "modal_close",
    button_id: "closeModal",
  });
}

document.querySelectorAll(".preview-card .preview-image").forEach((image) => {
  image.addEventListener("click", () => openModal(image.src));
});

modal.addEventListener("click", closeModal);

fullScreenImage.addEventListener("click", (event) => event.stopPropagation());

function logEvent(eventDetails) {
  console.log("logEvent called with:", eventDetails);
  const logs = JSON.parse(sessionStorage.getItem("eventLogs")) || [];

  eventDetails.timestamp = new Date().toISOString();

  logs.push(eventDetails);

  sessionStorage.setItem("eventLogs", JSON.stringify(logs));
  console.log(
    "Current logs in sessionStorage:",
    JSON.parse(sessionStorage.getItem("eventLogs"))
  );
}
