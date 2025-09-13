document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit');

    if (submitButton) { // Certifica-se de que o botão existe
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            validate();
        });
    }
});

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Vitoria" && password == "1412") {
        window.location = "menamora.html";
        return false;
    }
    else {
        alerta();
        return false;
    }
}

function alerta() {
    swal({
        title: "Você não é a Vitoria!",
        text: "Dê o fora daqui intrometido(a) :p",
        type: "error", // Adiciona um ícone de erro
        confirmButtonText: "Entendi", // Personaliza o texto do botão
        closeOnConfirm: true // Fecha ao clicar no botão
    });
}