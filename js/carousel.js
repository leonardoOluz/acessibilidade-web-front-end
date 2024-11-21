var btns = document.querySelectorAll(".listaDeArtigos-slider-item");
const listaNoticias = document.querySelectorAll(".listaDeArtigos-item");
const newSliderSpanItem = document.createElement("span");

newSliderSpanItem.classList.add("escondeVisualmente");
newSliderSpanItem.textContent = "(Slide atual)";

listaNoticias[0].style.display = "block";

// Percorre todos os botoes controladores
btns.forEach(function (btn) {
  // Remover o Span dos outros botoes
  btn.querySelector(".escondeVisualmente") &&
    btn.querySelector(".escondeVisualmente").remove();

  btn.addEventListener("click", function () {
    // btn.href = "javascript:void(0)";

    listaNoticias.forEach((noticia) => {
      noticia.style.display = "none";
      if (
        noticia.getAttribute("data-noticia") ===
        btn.getAttribute("data-sliderItem")
      ) {
        btn.append(newSliderSpanItem);
        noticia.style.display = "block";
      }
    });

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function (btnRemoveClass) {
      btnRemoveClass.classList.remove("listaDeArtigos-slider-item--ativo");
    });

    this.classList.add("listaDeArtigos-slider-item--ativo");
  });
});

// Percorre todas as noticias adicionando o span no botão com display block
listaNoticias.forEach((noticia) => {
  if (noticia.style.display === "block") {
    btns.forEach((btn) => {
      if (btn.getAttribute("data-sliderItem") === noticia.getAttribute("data-noticia")) {
        btn.append(newSliderSpanItem);
      }
    });
  }
});
