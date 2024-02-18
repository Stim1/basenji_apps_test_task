document.addEventListener("DOMContentLoaded", function () {
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

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function () {
      logEvent({
        event: "button_click",
        button_id: this.id,
      });
    });
  });
});
