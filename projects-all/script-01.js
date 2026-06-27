const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

Array.from(buttons).map((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "gray":
        body.style.background = event.target.id;
        break;
      case "purple":
        body.style.background = event.target.id;
        break;
      case "blue":
        body.style.background = event.target.id;
        break;
      case "yellow":
        body.style.background = event.target.id;
        break;

      default:
        body.style.background = "white";
        break;
    }
  });
});
