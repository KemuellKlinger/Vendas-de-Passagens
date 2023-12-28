// Seu arquivo back.js

// Função para pegar os valores dos checkboxes
function pegarValores() {
    var cadeiras = document.getElementsByName("cadeira");
    var cadeirasOcupadas = [];

    for (var i = 0; i < cadeiras.length; i++) {
        if (cadeiras[i].checked) {
            cadeirasOcupadas.push(cadeiras[i].value);
        }
    }

    console.log(cadeirasOcupadas);
}

// Função a ser executada quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionando um event listener para cada checkbox com a classe "opcao"
    var checkboxes = document.querySelectorAll('.opcao');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', pegarValores);
    });
});
