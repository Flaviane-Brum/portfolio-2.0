import { initScrollReveal } from "./modules/scrollReveal.js";
import { initGallery } from "./modules/gallery.js";
import { typeWrite } from "./modules/typeWrite.js";
import { initMenuMobile } from "./modules/menuMobile.js";
// animacao scroll
if (window.ScrollReveal) {
  initScrollReveal();
}
initGallery();

// animação writer
const type = document.querySelector(".typewriter");

if (type) {
  typeWrite(type);
}
// animação menu Mobile
initMenuMobile();
