(function () {
  document.addEventListener("DOMContentLoaded", function () {
    exibirVeiculos();
  });

  const getLocalStorage = () => {
    const veiculos = localStorage.getItem("veiculos");
    return JSON.parse(veiculos) || [];
    // Pega os veiculos cadastrados do localStorage
  };

  // Exibi os veiculos na tela
  function exibirVeiculos() {
    const areaDeCadastrados = document.querySelector(".cadastrados");
    areaDeCadastrados.innerHTML = ""; // Limpa o conteúdo antes de recriar

    const veiculosLista = getLocalStorage();

    veiculosLista.forEach((veiculo) => {
      const h1 = document.createElement("h1");
      h1.innerText = veiculo.marca;
      areaDeCadastrados.appendChild(h1);

      const pMarca = document.createElement("p");
      pMarca.innerHTML = `<span>MARCA:</span> ${veiculo.marca}`;
      areaDeCadastrados.appendChild(pMarca);

      const pModelo = document.createElement("p");
      pModelo.innerHTML = `<span>MODELO:</span> ${veiculo.modelo}`;
      areaDeCadastrados.appendChild(pModelo);

      const pAno = document.createElement("p");
      pAno.innerHTML = `<span>ANO DE FABRICAÇÃO:</span> ${veiculo.anoDeFabricacao}`;
      areaDeCadastrados.appendChild(pAno);

      // Adicione uma linha em branco para separar os carros
      const separador = document.createElement("hr");
      areaDeCadastrados.appendChild(separador);
    });
  }
})();
