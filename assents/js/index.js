(function () {
  const arr = JSON.parse(localStorage.getItem("veiculos")) || [];
  // Array para armazenar os objetos

  const marca = document.querySelector("#marca");
  const modelo = document.querySelector("#modelo");
  const anoDeFabricacao = document.querySelector("#anoDeFabricacao");
  const km = document.querySelector('#km');
  const valor = document.querySelector('#valor');
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    if (
      marca.value === "" ||
      modelo.value === "" ||
      anoDeFabricacao.value === "" ||
      km.value === "" ||
      valor.value === ""
    ) {
      alert("Preencha os campos da maneira correta!");
      return;
    }
    pushArr();
    clearInputs();
    alert('Veiculo cadastrado com sucesso!')
  });
  function Cadastro(marca, modelo, anoDeFabricacao,km,valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoDeFabricacao = anoDeFabricacao;
    this.km = km;
    this.valor = valor;
  } // Função construtora, Vai criar um objeto com os dados acima

  function clearInputs() {
    marca.value = "";
    modelo.value = "";
    anoDeFabricacao.value = "";
    km.value = "";
    valor.value = "";

    marca.focus();
    // Vai limpar os inputs e reidirecionar para o primeiro.
  }
  function pushArr() {
    const veiculos = new Cadastro(
      marca.value,
      modelo.value,
      anoDeFabricacao.value,
      km.value,
      valor.value,
    );
    arr.push(veiculos);
    save();
    return arr;
  } // Vai adinionar os objetos criados no array

  function save() {
    localStorage.setItem(`veiculos`, JSON.stringify(arr));
  } // Vai salvar o array no localStorage
})();
