const senha = document.querySelector("input[name='pesquisa2']");
const mostrarSenha = document.querySelector("#mostrarSenha");

mostrarSenha.addEventListener("change", function() {
    if (mostrarSenha.checked) {
        senha.type = "text";
    } else {
        senha.type = "password";
    }
});

