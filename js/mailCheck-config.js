var domains = ["gmail.com", "uol.com"];
var secondLevelDomains = ["hotmail"];
var topLevelDomains = ["com", "net", "org"];
const campoEmail = document.querySelector("#email");
const sugestao = document.getElementById("sugestao");

campoEmail.addEventListener("blur", function () {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains,  // optional
    topLevelDomains: topLevelDomains, // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function (suggestion) {
      console.log(suggestion.full)
      sugestao.style.display = "inline-block"
      sugestao.innerHTML = `Você quis dizer: <a href="#">${suggestion.full} ?</a>`
      sugestao.parentNode.classList.add("suggestion.full");
    },
  });
});
