const iconMenu = document.querySelector("#iconMenu");
const menuItems = document.querySelectorAll(".item-menu");
const menuList = document.getElementById("menu-list");
const mask = document.getElementById("mask");
const buttonClose = document.getElementById("button-close");
const textoBanner = document.getElementById("texto-banner");
const valorBanner = "HTML, CSS, JavaScript, PHP, Python, Java, entre outros.";
const barra = document.getElementById("barra");
let index = 0;

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

// ANIMATION TEXT BANNER
function digitar() {
  if (index < valorBanner.length) {
    textoBanner.textContent += valorBanner[index];
    index++;
    setTimeout(digitar, 50);
  } else {
    setTimeout(() => {
      textoBanner.innerHTML = "";
      index = 0;
      digitar();
    }, 3000);
  }

  console.log(index);
}

digitar();
