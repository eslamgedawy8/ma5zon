function showImage(imageSrc) {
    // Set the source of the main image to the clicked thumbnail
    document.getElementById('mainImage').src = imageSrc;

    // Show the main image
    document.querySelector('.main-image').style.display = 'block';
}

// Automatically display the first image on page load
window.addEventListener('DOMContentLoaded', function () {
    showImage('../images/product-details/main.png');
});