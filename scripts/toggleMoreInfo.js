function toggleMoreInfo() {
  const additionalInfo = document.querySelector(".additional-info");
  additionalInfo.classList.toggle("active");

  const moreLink = document.querySelector(".more-link");
  if (additionalInfo.classList.contains("active")) {
    moreLink.textContent = "less";
  } else {
    moreLink.textContent = "more";
  }
}
