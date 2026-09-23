const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const lightboxClose = document.querySelector(".lightbox-close");

// Header background after scrolling
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Portfolio filters
filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(button => button.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;

    galleryItems.forEach(item => {
      const categories = item.dataset.category.split(" ");
      const matches = categories.includes(selected);

      item.classList.toggle("hidden", !matches);
    });
  });
});

// Apply Overview filter on initial page load
const defaultFilter = document.querySelector('.filter[data-filter="overview"]');

if (defaultFilter) {
  defaultFilter.click();
}

// Image lightbox
galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");

    // Don't open a missing placeholder image.
    if (!image.complete || image.naturalWidth === 0) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = item.querySelector("figcaption").textContent;

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
