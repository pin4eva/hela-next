const reportTabItems = document.querySelectorAll(".report-tab-item");
reportTabItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
