(function () {
  const marca = document.querySelector("#marca");
  const modelo = document.querySelector("#modelo");
  const anoDeFabricaçao = document.querySelector("#anoDeFabricaçao");
  const btn = document.querySelector("#btn");
  const arrObjetos = []; //Array para guardar os objetos

  function getValue(marca, modelo, anoDeFabricaçao) {
    return {
      marca,
      modelo,
      anoDeFabricaçao,
    };
    // Vai Criar um  objeto com as informações acima
    // Função de fábrica.
  }
  function limpaImputs() {
    marca.value = "";
    modelo.value = "";
    anoDeFabricaçao.value = "";
    marca.focus();
    // Vai limpar os inputs e reidirecionar para o primeiro.
  }
  document.addEventListener("DOMContentLoaded", function () {
    exibirVeiculos();
  });

  btn.addEventListener("click", () => {
    if (
      marca.value === "" ||
      modelo.value === "" ||
      anoDeFabricaçao.value === ""
    ) {
      alert("ERROR");
      return;
    }
    arrayObj();
    limpaImputs();
    salvarVeiculos();
    exibirVeiculos();
    alert("Veiculo cadastrado com sucesso!");
    // Chamando as funções com o click do butão
  });

  function arrayObj() {
    arrObjetos.push(getValue(marca.value, modelo.value, anoDeFabricaçao.value));
    return arrObjetos;
    //  Adicionar o objeto criado dentro do array
  }

  function salvarVeiculos() {
    localStorage.setItem(`Veiculos`, JSON.stringify(arrObjetos));
    // Salvar os objetos do array criado no localStorage
  }

  const getLocalStorage = () => {
    const veiculos = localStorage.getItem("Veiculos");
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
      pAno.innerText = `ANO DE FABRICAÇÃO: ${veiculo.anoDeFabricaçao}`;
      areaDeCadastrados.appendChild(pAno);
  
      // Adicione uma linha em branco para separar os carros
      const separador = document.createElement("hr");
      areaDeCadastrados.appendChild(separador);
    });
  }
})();

