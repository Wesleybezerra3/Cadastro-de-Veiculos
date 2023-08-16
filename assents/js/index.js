(function () {
  const marca = document.querySelector("#marca");
  const modelo = document.querySelector("#modelo");
  const anoDeFabricacao = document.querySelector("#anoDeFabricaçao");
  const btn = document.querySelector("#btn");
  const arrObjetos = []; //Array para guardar os objetos

  function getValue(marca, modelo, anoDeFabricacao) {
    return {
      marca,
      modelo,
      anoDeFabricacao,
    };

    // Vai Criar um  objeto com as informações acima
    // Função de fábrica.
  }

  function limpaImputs() {
    marca.value = "";
    modelo.value = "";
    anoDeFabricacao.value = "";
    marca.focus();
    // Vai limpar os inputs e reidirecionar para o primeiro.
  }
  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      if (
        marca.value === "" ||
        modelo.value === "" ||
        anoDeFabricacao.value === ""
      ) {
        alert("Preencha todos as informções corretamente!");
        return;
      }
      arrayObj();
      limpaImputs();
      salvarVeiculos();
      alert("Veiculo cadastrado com sucesso!");
    }
  });

  btn.addEventListener("click", () => {
    if (
      marca.value === "" ||
      modelo.value === "" ||
      anoDeFabricacao.value === ""
    ) {
      alert("Preencha todos as informções corretamente!");
      return;
    }
    arrayObj();
    limpaImputs();
    salvarVeiculos();
    alert("Veiculo cadastrado com sucesso!");
    // Chamando as funções com o click do butão
  });

  function arrayObj() {
    arrObjetos.push(getValue(marca.value, modelo.value, anoDeFabricacao.value));
    return arrObjetos;
    //  Adicionar o objeto criado dentro do array
  }

  function salvarVeiculos() {
    localStorage.setItem(`veiculos`, JSON.stringify(arrayObj()));
    // Salvar os objetos do array criado no localStorage
  }
})();
  