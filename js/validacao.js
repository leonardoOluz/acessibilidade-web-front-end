const inputCep = document.querySelector("#cep");
inputCep.oninvalid = () => {
  inputCep.setCustomValidity("")
  if (!inputCep.validity.valid) {
    inputCep.setCustomValidity("Ops, algo errado no campo CEP!");
        inputCep.parentNode.classList.add("contatoCampo--erro")
  }
}
