const iconMenu = document.querySelector("#iconMenu");
const menuItems = document.querySelectorAll(".item-menu");
const menuList = document.getElementById("menu-list");
const mask = document.getElementById("mask");
const buttonClose = document.getElementById("button-close");

// CLICK BUTTON ICON MENU
iconMenu.addEventListener("click", () => {
  mask.classList.remove("hidden");

  menuList.style.animation = "openMenu .3s ease-in";
  menuList.classList.remove("hidden");
});

// CLICK BUTTON ICON CLOSE MENU
buttonClose.addEventListener("click", () => {
  mask.classList.add("hidden");
  menuList.style.animation = "closeMenu .3s ease-in";

  setTimeout(() => {
    menuList.classList.add("hidden");
    menuList.style.animation = "openMenu .3s ease-in";
  }, 300);
});

// CLICK IN MASK CONTAINER
mask.addEventListener("click", () => {
  mask.classList.add("hidden");
  menuList.style.animation = "closeMenu .3s ease-in";

  setTimeout(() => {
    menuList.classList.add("hidden");
    menuList.style.animation = "openMenu .3s ease-in";
  }, 300);
});
