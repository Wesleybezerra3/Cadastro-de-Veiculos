(function () {
  const areaDeCadastrados = document.querySelector(".cadastrados");

  document.addEventListener("DOMContentLoaded", function () {
    exibirVeiculos();
    apagarVeiculo();
    addText();
  }); // Carrega as funções

  const getLocalStorage = () => {
    const veiculos = localStorage.getItem("veiculos");
    return JSON.parse(veiculos) || [];
  }; //Pegar os veiculos cadastrados no localStorage

  function addText(){ //Vai adicionar um aviso se o estoque estiver vazio.
    const text = document.querySelector('#aviso');
    if(getLocalStorage().length === 0){
      text.innerText = 'Sem veiculos no estoque!'
    }else{
      text.innerText = ''
    }
    
  }
  const icon = (lixeira, car) => {
    const divIcon = document.createElement("div");
    divIcon.classList.add("divIcon");
    divIcon.appendChild(lixeira);
    divIcon.appendChild(car);
    return divIcon;
  };

  const criarLixeira = () => {
    const lixeira = document.createElement("i");
    lixeira.classList.add("fa-solid", "fa-trash", "apagar");
    return lixeira;
  }; // Função para criar um botão de apagar.

  const veiculoVendido = () => {
    // Função para criar um botão de 'veiculo vendido'.
    const car = document.createElement("i");
    car.classList.add("fa-solid", "fa-car");
    return car;
  };

  function apagarVeiculo() {
    areaDeCadastrados.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("apagar")) {
        const confirmar = confirm(
          "Se apagar, não será possível recuperar o veículo excluído. Deseja continuar?"
        );

        if (confirmar) {
          const veiculos = getLocalStorage();
          const articleElement = el.closest(".vehicleDetail"); // Encontra o elemento <article> pai do botão

          if (articleElement) {
            const index = Array.from(
              articleElement.parentElement.children
            ).indexOf(articleElement);

            if (index !== -1) {
              veiculos.splice(index, 1);
              localStorage.setItem("veiculos", JSON.stringify(veiculos));
              articleElement.remove();
            }
          }
        }
      }
    });
  }

  // Função para criar e adicionar uma div com os elementos
  function article(elementos) {
    const article = document.createElement("article");
    article.classList.add("vehicleDetail");
    elementos.forEach((elemento) => {
      article.appendChild(elemento);
    });
    areaDeCadastrados.appendChild(article);
  }


  function exibirVeiculos() {
    areaDeCadastrados.innerHTML = ""; // Limpa o conteúdo antes de recriar
    const veiculosLista = getLocalStorage();

    veiculosLista.forEach((veiculo) => {
     
      const pAno = document.createElement("p");
      pAno.innerHTML = `<span>ANO DE FABRICAÇÃO:</span> ${veiculo.anoDeFabricacao}`;

      const pKm = document.createElement("p");
      pKm.innerHTML = `<span>KM:</span> ${veiculo.km}`;

      const pValor = document.createElement("p");
      pValor.innerHTML = `<span>VALOR:</span> ${veiculo.valor}`;

      const divIcon = icon(criarLixeira(), veiculoVendido());

      function divModelo(veiculo){
        const h1 = document.createElement("h1");
        const div = document.createElement('div');
        div.classList.add('vehicleDetailHeader');
        const p = document.createElement('p');
          
        const modelo = veiculo.modelo.split(' ');

        h1.innerHTML = `${veiculo.marca} <span>${modelo[0]}</span>`;
        p.innerText = modelo.slice(1).join(' ');

        const children = [
          h1,
          p
        ];

        children.forEach(child=>{
         div.appendChild(child);
        });
       
        return div;
      }

     

      article([divModelo(veiculo), pAno, pKm,pValor,divIcon]);

    });
  }



})();
