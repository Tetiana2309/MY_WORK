function zoomImage(image) {
  if (image.classList.contains("zoomed")) {
    image.classList.remove("zoomed");
  } else {
    // Remove "zoomed" class from all images before zooming one
    const images = document.querySelectorAll(".image");
    images.forEach((img) => {
      img.classList.remove("zoomed");
    });

    image.classList.add("zoomed");
  }
}

// Получаем все элементы превью изображений
const galleryImages = document.querySelectorAll(".gallery_images");

// Получаем ссылки на элементы lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox_image");

// Добавляем обработчики клика на превью изображений
galleryImages.forEach((image) => {
  image.addEventListener("click", onImageClick);
});

// Обработчик клика на превью изображение
function onImageClick(event) {
  event.preventDefault();

  const clickedElement = event.target;

  // Получаем ссылку на другую картинку (например, заменяем путь к оригинальной картинке)
  const newSrc = clickedElement.dataset.originalSrc;

  // Устанавливаем новый источник (src) изображения для lightbox
  lightboxImage.src = newSrc;

  // Открываем lightbox
  lightbox.style.display = "flex";

  // Добавляем обработчик нажатия клавиши "Escape" для закрытия lightbox
  document.addEventListener("keydown", handleEscapeKeydown);

  // Добавляем обработчик клика вне изображения для закрытия lightbox
  lightbox.addEventListener("click", handleClickOutside);
}

// Обработчик нажатия клавиши "Escape"
function handleEscapeKeydown(event) {
  if (event.code === "Escape") {
    closeLightbox();
  }
}

// Обработчик клика вне изображения для закрытия lightbox
function handleClickOutside(event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
}

// Закрытие lightbox
function closeLightbox() {
  lightbox.style.display = "none";
  // Удаляем обработчики при закрытии lightbox
  document.removeEventListener("keydown", handleEscapeKeydown);
  lightbox.removeEventListener("click", handleClickOutside);
}
