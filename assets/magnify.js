const containers = document.querySelectorAll(".product-media");

containers.forEach(container => {
    const img = container.querySelector(".product-media__image");
    if (!img) return;

    container.addEventListener("mousemove", e => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(2)";
    });

    container.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});