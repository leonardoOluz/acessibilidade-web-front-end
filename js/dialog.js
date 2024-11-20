// Variáveis
var btnAbreDialog = document.querySelector("#abreDialog");
var dialog = document.querySelector(".dialogNewsletter");
var dialogBody = document.querySelector(".dialogNewsletter-body");
var dialogOverlay = document.querySelector(".dialogNewsletter-overlay");
const boxDialogNewsLetter = document.querySelector(".dialogNewsletter-body");

btnAbreDialog.style.display = "block";

// Quando abrir a dialog...
btnAbreDialog.addEventListener("click", function () {
  dialog.classList.add("dialogNewsletter--aberto");
  document.querySelector(".dialogNewsletter-campo").focus();
});

dialogOverlay.addEventListener("click", fechandoDialog);

boxDialogNewsLetter.addEventListener("keydown", (event) => {
  const elementBox = boxDialogNewsLetter.querySelectorAll("button, input");
  const firstElement = elementBox[0];
  const lastElement = elementBox[elementBox.length - 1];

  if (event.key === "Tab") {
    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (
        document.activeElement === lastElement ||
        !boxDialogNewsLetter.contains(document.activeElement)
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  if (event.key === "Escape") {
    fechandoDialog();
  }
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove("dialogNewsletter--aberto");
  btnAbreDialog.focus();
}

// Listeners
document
  .querySelector(".dialogNewsletter-fechar")
  .addEventListener("click", fechandoDialog);
