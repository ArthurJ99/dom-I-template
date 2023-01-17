const paragrafo = document.getElementById("paragrafo");
console.log(paragrafo.innerHTML);

const textoInput = document.getElementById("texto");
console.log(textoInput.value);

const texto = function () {
  console.log(document.getElementById("texto").value);
};

const button = function () {
  paragrafo.innerHTML = textoInput.value;
  textoInput.value = " ";
};
