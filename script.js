document.addEventListener("DOMContentLoaded", () => {
    const langToggleBtn = document.getElementById("langToggle");
    const body = document.body;

    langToggleBtn.addEventListener("click", () => {
        if (body.classList.contains("lang-en")) {
            body.classList.remove("lang-en");
            body.classList.add("lang-pl");
        } else {
            body.classList.remove("lang-pl");
            body.classList.add("lang-en");
        }
    });

    const modal = document.getElementById("imageModal");
    const expandedImg = document.getElementById("expandedImg");
    const closeBtn = document.querySelector(".close-modal");
    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            modal.style.display = "block";
            expandedImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});