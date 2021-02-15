const reportTabItems = document.querySelectorAll(".report-tab-item");
const hamburger = reportTabItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
