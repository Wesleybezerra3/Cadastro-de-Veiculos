(function () {
  const arr = JSON.parse(localStorage.getItem("veiculos")) || [];
  // Array para armazenar os objetos

  const marca = document.querySelector("#marca");
  const modelo = document.querySelector("#modelo");
  const anoDeFabricacao = document.querySelector("#anoDeFabricacao");
  const km = document.querySelector("#km");
  const valor = document.querySelector("#valor");
  const cambio = document.querySelector("#cambio");
  const combus = document.querySelector("#combus");
  const carroceria = document.querySelector("#carroceria");
  const cor = document.querySelector("#cor");
  const finalPlaca = document.querySelector("#finalPlaca");
  const obs = document.querySelector('#obs');
  const btn = document.querySelector("#btn");

  btn.addEventListener("click", () => {
    if (verify()) {
      alert("Preencha os campos da corretamente!");
      return;
    }
    pushArr();
    clearInputs();
    alert("Veiculo cadastrado com sucesso!");
  });

  const verify = () => {
    //Função para verificar se há algum campo vazio.
    return (
      marca.value === "" ||
      modelo.value === "" ||
      anoDeFabricacao.value === "" ||
      km.value === "" ||
      valor.value === "" ||
      cambio.value === "" ||
      combus.value === "" ||
      carroceria.value === "" ||
      cor.value === "" ||
      finalPlaca.value === ""
    );
  };
  function Cadastro(marca,modelo,anoDeFabricacao,km,valor,cambio,combus,carroceria,cor,finalPlaca,obs) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoDeFabricacao = anoDeFabricacao;
    this.km = km;
    this.valor = valor;
    this.cambio = cambio;
    this.combus = combus;
    this.carroceria = carroceria;
    this.cor = cor;
    this.finalPlaca = finalPlaca;
    this.obs = obs;

  } // Função construtora, Vai criar um objeto com os dados acima

  function clearInputs() {
    marca.value = "";
    modelo.value = "";
    anoDeFabricacao.value = "";
    km.value = "";
    valor.value = "";
    cambio.value = ""; 
    combus.value = "";
    carroceria.value = "";
    cor.value = "";
    finalPlaca.value = "";
    obs.value = "";

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
      cambio.value,
      combus.value,
      carroceria.value,
      cor.value,
      finalPlaca.value,
      obs.value,
    );
    arr.push(veiculos);
    save();
    return arr;
  } // Vai adinionar os objetos criados no array

  function save() {
    localStorage.setItem(`veiculos`, JSON.stringify(arr));
  } // Vai salvar o array no localStorage
})();
