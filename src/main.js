
const print = document.getElementById("root");
const paises = document.getElementById("paises").addEventListener("change", escolhaPais);
const decrescente = document.getElementById("decrescente").addEventListener("click", ordemDecrescente);
const crescente = document.getElementById("crescente").addEventListener("click", ordemCrescente);

function escolhaPais(event) {
  event.preventDefault();
  print.innerHTML = "";
  const pais = document.getElementById("paises").value;
  const paisEscolhido = WORLDBANK[pais].indicators;
  const paisFiltrado = window.data.pais(paisEscolhido);
  paisFiltrado.map(item => {
    print.innerHTML += `<p>${item.name}</p><section id="${item.name}"></section><br><br>`;
    for (let ano in item.anos) {
      if (item.anos[ano] !== "") {
        document.getElementById(item.name).innerHTML += `<p>${ano} : ${item.anos[ano].toString().slice(0, 5)} %</p>`;
      }
    }
  });
}

function ordemDecrescente(event) {
  event.preventDefault();
  document.querySelectorAll('section').forEach(e => e.setAttribute('style', 'flex-direction: column-reverse'))
}

function ordemCrescente(event) {
  event.preventDefault();
  document.querySelectorAll('section').forEach(e => e.setAttribute('style', 'flex-direction: column'))
}

document.getElementById("media").addEventListener("click", calculo);

function calculo(event) {
  event.preventDefault();
  document.getElementById("calculo").innerHTML = data.calculo(WORLDBANK.BRA.indicators, "SL.UEM.TOTL.FE.ZS", "SP.POP.TOTL.FE.IN");
}
