let images = [];
let currentIndex = 0;

function updateImages() {
    images = Array.from(
        document.querySelectorAll(".gallery-item:not([style*='display: none']) img")
    );
}

function openLightbox(image) {
    updateImages();
    currentIndex = images.indexOf(image);
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = image.src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;

    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById("lightbox").addEventListener("click", function(event) {
    if (event.target === this) closeLightbox();
});
