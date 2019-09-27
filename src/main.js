const print = document.getElementById("root");
paises.addEventListener("change", () => {
  escolhaPais();
});

function escolhaPais() {
  event.preventDefault();
  print.innerHTML = "";
  const pais = document.getElementById("paises").value;
  const paisEscolhido = WORLDBANK[pais].indicators;
  const paisFiltrado = window.data.pais(paisEscolhido);
  paisFiltrado.map(item => {
    print.innerHTML += `<p>${item.name}</p><div id="${item.name}"></div>`;
    for (let ano in item.anos) {
      if (item.anos[ano] !== "") {
        //console.log(typeof(item.anos[ano]))
        document.getElementById(item.name).innerHTML += `<p>${ano} : ${item.anos[ano].toString().slice(0, 5)} %</p>`;
      }
    }
  });
};

// crescente.addEventListener("click", function ordemCrescente () {
//   print.innerHTML = "";
//   const paisFiltrado = window.data.pais(paisEscolhido);
//   arrCrescente = [];
//   paisFiltrado.map(i => {

//   })
//   })

document.getElementById("media").addEventListener("click", calculo);
function calculo() {
  document.getElementById("qualquer").innerHTML = data.calculo(WORLDBANK.BRA.indicators, "SL.UEM.TOTL.FE.ZS", "SP.POP.TOTL.FE.IN");
}
  
