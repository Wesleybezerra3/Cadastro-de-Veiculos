(function () {
  const areaDeCadastrados = document.querySelector(".cadastrados");

  document.addEventListener("DOMContentLoaded", function () {
    exibirVeiculos();
    apagarVeiculo();
  }); // Carrega as funções

  const getLocalStorage = () => {
    const veiculos = localStorage.getItem("veiculos");
    return JSON.parse(veiculos) || [];
  }; //Pegar os veiculos cadastrados no localStorage

  const criarLixeira = () => {
    const lixeira = document.createElement("i");
    lixeira.classList.add("fa-solid", "fa-trash", "apagar");
    return lixeira;
  };// Função para criar um botão de apagar
  

  function apagarVeiculo() { //Função para apagar o veiculo

    areaDeCadastrados.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("apagar")) {
        const confirmar = confirm(
          "Se apaga não será possivel recuperar o veiculo excluido, Deseja continuar?"
        );
        if (confirmar) {
          const veiculos = getLocalStorage();
          const index = Array.from(
            el.parentElement.parentElement.children
          ).indexOf(el.parentElement);

          if (index !== -1) {
            veiculos.splice(index, 1);
            localStorage.setItem("veiculos", JSON.stringify(veiculos));
            el.parentElement.remove();
          }
        }
      }
    });
  } 

  // Função para criar e adicionar uma div com os elementos
  function article(elementos) {
    const article = document.createElement("article");
    article.classList.add("veiculos");
    elementos.forEach((elemento) => {
      article.appendChild(elemento);
    });
    areaDeCadastrados.appendChild(article);
  }

  function exibirVeiculos() {
    areaDeCadastrados.innerHTML = ""; // Limpa o conteúdo antes de recriar
    const veiculosLista = getLocalStorage();

    veiculosLista.forEach((veiculo) => {
      const h1 = document.createElement("h1");
      h1.innerText = veiculo.marca;

      const pMarca = document.createElement("p");
      pMarca.innerHTML = `<span>MARCA:</span> ${veiculo.marca}`;

      const pModelo = document.createElement("p");
      pModelo.innerHTML = `<span>MODELO:</span> ${veiculo.modelo}`;

      const pAno = document.createElement("p");
      pAno.innerHTML = `<span>ANO DE FABRICAÇÃO:</span> ${veiculo.anoDeFabricacao}`;

      const apagar = criarLixeira();

      article([h1, pMarca, pModelo, pAno, apagar]);
    });
  }
})();
