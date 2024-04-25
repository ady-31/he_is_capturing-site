const imageContainer = document.querySelector('.image-container');

let scrollAmount = 0;
let isScrolling = false;

function scrollImages() {
  scrollAmount += 1;
  imageContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });

  if (imageContainer.scrollWidth - imageContainer.scrollLeft - imageContainer.clientWidth <= 1) {
    scrollAmount = 0;
  }

  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(scrollImages);
  }
}

scrollImages();

// Optional: Pause scrolling on hover
imageContainer.addEventListener('mouseover', () => {
  isScrolling = false;
});

imageContainer.addEventListener('mouseout', () => {
  isScrolling = true;
  scrollImages();
});
