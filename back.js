function pegarValores() {
    var cadeiras = document.getElementsByName("cadeira");
    var cadeirasOcupadas = [];
    var cad = document.getElementById("valores")
    var result = 0
    var valor = 35

    for (var i = 0; i < cadeiras.length; i++) {
        if (cadeiras[i].checked && cadeirasOcupadas) {
            cadeirasOcupadas.push(cadeiras[i].value);
            cad.innerText = "Suas poltoras:  " + cadeirasOcupadas
        }else{
            cad.innerText = "Suas poltoras: " + cadeirasOcupadas
        }
    }
    result = cadeirasOcupadas.length * valor
    cad.innerHTML += "<br>" +  fomatDinheiro(result)
}

// Função a ser executada quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionando um event listener para cada checkbox com a classe "opcao"
    var checkboxes = document.querySelectorAll('.opcao');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', pegarValores);
    });
});

function fomatDinheiro(valor){
    // Formatação padrão para o local atual do usuário
    const formatoPadrao = valor.toLocaleString();
    
    // Formatação para o local do usuário, com opções específicas para moeda
    const formatoMoeda = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    return formatoMoeda
}

function inverterLocal() {
    var partida = document.getElementById("partida");
    var chegada = document.getElementById("chegada");

    console.log("chegada " + chegada.value, "partida " + partida.value);

    var temp = partida.value;
    partida.value = chegada.value;
    chegada.value = temp;
}
