const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

}
