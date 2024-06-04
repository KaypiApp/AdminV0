window.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById("imageContainer");
    const images = document.querySelectorAll('.image-container img');

    let currentIndex = 0;

    function changeImage() {
        images.forEach(img => {
            img.classList.remove('active');
        });

        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    function startCarousel() {
        setInterval(changeImage, 5000);
    }

    startCarousel();
});
