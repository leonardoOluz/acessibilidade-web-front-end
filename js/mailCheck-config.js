var domains = ["gmail.com", "uol.com"];
var secondLevelDomains = ["hotmail"];
var topLevelDomains = ["com", "net", "org"];
const campoEmail = document.querySelector("#email");

campoEmail.addEventListener("blur", function () {
  Mailcheck.run({
    email: campoEmail.value,
    domains: domains,  // optional
    topLevelDomains: topLevelDomains, // optional
    secondLevelDomains: secondLevelDomains, // optional
    suggested: function (suggestion) {
      console.log(suggestion.full)
    },
  });
});
