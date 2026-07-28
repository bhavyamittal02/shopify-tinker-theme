document.addEventListener("click", (e) => {
  const openBtn = e.target.closest(".quick-view-btn");

  if (openBtn) {
    openBtn.nextElementSibling.showModal();
    return;
  }

  const closeBtn = e.target.closest(".close-btn");

  if (closeBtn) {
    closeBtn.closest("dialog").close();
  }
});

document.querySelectorAll(".quick-view-modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
});