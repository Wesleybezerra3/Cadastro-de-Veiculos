(function () {
  const areaDeCadastrados = document.querySelector(".cadastrados");

  document.addEventListener("DOMContentLoaded", function () {
    exibirvehicles();
    apagarvehicle();
    addText();
  }); // Carrega as funções

  const getLocalStorage = () => {
    const vehicles = localStorage.getItem("veiculos");
    return JSON.parse(vehicles) || [];
  }; //Pegar os vehicles cadastrados no localStorage

  function addText() {
    //Vai adicionar um aviso se o estoque estiver vazio.
    const text = document.querySelector("#aviso");
    if (getLocalStorage().length === 0) {
      text.innerText = "Sem vehicles no estoque!";
    } else {
      text.innerText = "";
    }
  }
  const icon = (lixeira, car) => {
    const divIcon = document.createElement("div");
    divIcon.classList.add("divIcon");
    divIcon.appendChild(lixeira);
    divIcon.appendChild(car);
    return divIcon;
  }; // Cria uma div para agrupar os icones das ferramentas manibulação do

  const criarLixeira = () => {
    const lixeira = document.createElement("i");
    lixeira.classList.add("fa-solid", "fa-trash", "apagar");
    return lixeira;
  }; // Função para criar um botão de apagar.

  const vehicleVendido = () => {
    // Função para criar um botão de 'vehicle vendido'.
    const car = document.createElement("i");
    car.classList.add("fa-solid", "fa-car");
    return car;
  };

  function apagarvehicle() {
    areaDeCadastrados.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("apagar")) {
        const confirmar = confirm(
          "Se apagar, não será possível recuperar o veículo excluído. Deseja continuar?"
        );

        if (confirmar) {
          const vehicles = getLocalStorage();
          const vehicleDetail = el.closest(".vehicleDetail"); // Encontra o elemento <article> pai do botão

          if (vehicleDetail) {
            const index = Array.from(
              vehicleDetail.parentElement.children
            ).indexOf(vehicleDetail);

            if (index !== -1) {
              vehicles.splice(index, 1);
              localStorage.setItem("veiculos", JSON.stringify(vehicles));
              vehicleDetail.remove();
            }
          }
        }
      }
    });
  }

  // Função para criar um card e receber outros elementos com as informações do vehicle cadastrado.
  function vehicleDetail(elementos) {
    const vehicleDetail = document.createElement("article");
    vehicleDetail.classList.add("vehicleDetail");
    elementos.forEach((elemento) => {
      vehicleDetail.appendChild(elemento);
    });
    areaDeCadastrados.appendChild(vehicleDetail);
  }

  function exibirvehicles() {
    areaDeCadastrados.innerHTML = ""; // Limpa o conteúdo antes de recriar.
    const vehiclesLista = getLocalStorage();

    vehiclesLista.forEach((vehicle) => {

      vehicleDetail([
        vehicleDetailHeader(vehicle),
        containerVehicle(
        vehicleMain(vehicle),
        vehicleObs(vehicle)),
        icon(criarLixeira(), vehicleVendido()),
      ]);
      //Adiciona os informações no vehicle details
    });
  }
  function vehicleDetailHeader(vehicle) {
    const h1 = document.createElement("h1");
    const div = document.createElement("div");
    div.classList.add("vehicleDetailHeader");
    const p = document.createElement("p");

    const modelo = vehicle.modelo.split(" ");

    h1.innerHTML = `${vehicle.marca} <span>${modelo[0]}</span>`;
    p.innerText = modelo.slice(1).join(" ");

    const children = [h1, p];

    children.forEach((child) => {
      div.appendChild(child);
    });
    return div;
  } // Vai criar o header do vehicle detail com as informações: Marca e Modelo do vehicle criado.

  function containerVehicle(main, obs){
   const container = document.createElement('div');
   container.classList.add('containerVehicle');
   const child = [
    main,
    obs,
   ];
   child.forEach(vehicles =>{
    container.appendChild(vehicles);
   })
   return container;
  }

  function vehicleMain(vehicle) {
    const divVehicleMain = document.createElement("div");
    divVehicleMain.classList.add('vehicleMain')
    const child = [
      pAno(vehicle),
      pKm(vehicle),
      pValor(vehicle),
      pCambio(vehicle),
      pCombus(vehicle),
      pCarroceria(vehicle),
      pCor(vehicle),
      pFinalPlaca(vehicle),
    ];
    child.forEach((paragraph) => divVehicleMain.appendChild(paragraph));
    return divVehicleMain;
  }
  function vehicleObs(vehicle){
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.innerText ='Observações';

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-circle-arrow-down')

     summary.appendChild(p);
     summary.appendChild(icon);
  
    details.classList.add('vehicleObs')
    article.innerHTML = vehicle.obs;

   const child = [
    summary,
    article,
   ]

   child.forEach(content => details.appendChild(content))
   return details;

  }

  function pAno(vehicle) {
    const pAno = document.createElement("p");
    pAno.innerHTML = `<span>ano</span> ${vehicle.anoDeFabricacao}`;

    return pAno;
  }
  function pKm(vehicle) {
    const pKm = document.createElement("p");
    pKm.innerHTML = `<span>km</span> ${vehicle.km}`;

    return pKm;
  }
  function pValor(vehicle) {
    const pValor = document.createElement("p");
    pValor.innerHTML = `<span>valor</span> ${vehicle.valor}`;

    return pValor;
  }
  function pCambio(vehicle) {
    const pCambio = document.createElement("p");
    pCambio.innerHTML = `<span>câmbio</span> ${vehicle.cambio}`;

    return pCambio;
  }
  function pCombus(vehicle) {
    const pCombus = document.createElement("p");
    pCombus.innerHTML = `<span>combustível</span> ${vehicle.combus}`;

    return pCombus;
  }
  function pCarroceria(vehicle) {
    const pCarroceria = document.createElement("p");
    pCarroceria.innerHTML = `<span>carroceria</span> ${vehicle.carroceria}`;

    return pCarroceria;
  }
  function pCor(vehicle) {
    const pCor = document.createElement("p");
    pCor.innerHTML = `<span>cor</span> ${vehicle.cor}`;

    return pCor;
  }
  function pFinalPlaca(vehicle) {
    const pFinalPlaca = document.createElement("p");
    pFinalPlaca.innerHTML = `<span>final da placa</span> ${vehicle.finalPlaca}`;

    return pFinalPlaca;
  }
})();
