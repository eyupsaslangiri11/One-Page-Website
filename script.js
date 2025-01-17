let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');

function openLightbox(img) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = img.src;
    currentImageIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.getElementById('lightbox-img').src = images[currentImageIndex].src;
}

document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
}); 