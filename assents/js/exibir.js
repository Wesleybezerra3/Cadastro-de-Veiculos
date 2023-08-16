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
      pMarca.innerText = `MARCA: ${veiculo.marca}`;
      areaDeCadastrados.appendChild(pMarca);

      const pModelo = document.createElement("p");
      pModelo.innerText = `MODELO: ${veiculo.modelo}`;
      areaDeCadastrados.appendChild(pModelo);

      const pAno = document.createElement("p");
      pAno.innerText = `ANO DE FABRICAÇÃO: ${veiculo.anoDeFabricacao}`;
      areaDeCadastrados.appendChild(pAno);

      // Adicione uma linha em branco para separar os carros
      const separador = document.createElement("hr");
      areaDeCadastrados.appendChild(separador);
    });
  }
})();
