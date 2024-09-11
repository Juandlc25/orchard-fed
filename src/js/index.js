import "../sass/main.scss";

const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const navItems = Array.from(document.querySelectorAll(".nav__item"));
const links = Array.from(document.querySelectorAll("[data-scroll-target]"));

window.updateModal = (imageSrc, text) => {
  if (modalImage && modalText) {
    modalImage.src = imageSrc;
    modalText.textContent = text;
  } else {
    console.warn("No se pudo encontrar los elementos del modal.");
  }
};

const initializeScrollSpyAndHandlers = () => {
  if (links.length > 0) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#navbar-main",
      offset: 5,
    });

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetSelector = link.getAttribute("data-scroll-target");
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn("Elemento no encontrado:", targetSelector);
        }
      });
    });
  }
};

const manageActiveClass = () => {
  const currentClass = "nav__item--current";
  let currentItem = navItems.find((item) =>
    item.classList.contains(currentClass)
  );

  const setCurrent = (newItem) => {
    if (newItem === currentItem) return;

    if (currentItem) currentItem.classList.remove(currentClass);
    newItem.classList.add(currentClass);
    currentItem = newItem;
  };

  navItems.forEach((item) => {
    item.addEventListener("click", () => setCurrent(item));
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initializeScrollSpyAndHandlers();
  manageActiveClass();
});
