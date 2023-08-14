
(function(){
    const marca = document.querySelector('#marca');
    const modelo = document.querySelector('#modelo');
    const anoDeFabricaçao = document.querySelector('#anoDeFabricaçao');
    const btn = document.querySelector('#btn');
    const arrObjetos = [];//Array para guardar os objetos
    
    function getValue(marca,modelo,anoDeFabricaçao){
        return {
           marca,
           modelo,
           anoDeFabricaçao
        };
        // Vai Criar um  objeto com as informações acima
        // Função de fábrica.
    }
    function limpaImputs(){
        marca.value = "";
        modelo.value = "";
        anoDeFabricaçao.value = "";
        marca.focus();
        // Vai limpar os inputs e reidirecionar para o primeiro.
    }
    btn.addEventListener('click',()=>{
         if(marca.value === "" || modelo.value=== "" || anoDeFabricaçao.value === ""){
            alert('ERROR')
            return;
         }
         arrayObj();
         limpaImputs();
         salvarVeiculos();
         alert('Veiculo cadastrado com sucesso!')
        // Chamando as funções com o click do butão
    })
    
    function arrayObj(){
     arrObjetos.push(getValue(marca.value,modelo.value,anoDeFabricaçao.value));
     return arrObjetos;
    //  Adicionar o objeto criado dentro do array
    }
    
    function salvarVeiculos(){
        localStorage.setItem(`Veiculos`,JSON.stringify(arrObjetos));
    // Salvar os objetos do array criado no localStorage
    }
    
})();

(function(){






})();