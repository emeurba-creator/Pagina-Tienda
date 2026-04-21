const formulario = document.getElementById("formRegistro");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const mensajeError = document.getElementById("mensajeError");

formulario.addEventListener("submit", function(event) {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        mensajeError.textContent = "Las contraseñas no coinciden";
    } else {
        mensajeError.textContent = "";
    }
});

const botonesVer = document.querySelectorAll(".toggle-password");

botonesVer.forEach((boton) => {
    const input = document.getElementById(boton.dataset.target);

    input.addEventListener("input", function () {
        if (input.value.length > 0) {
            boton.style.display = "block";
        } else {
            boton.style.display = "none";
            input.type = "password";
            boton.textContent = "👁";
        }
    });

    boton.addEventListener("click", function () {
        if (input.type === "password") {
            input.type = "text";
            boton.textContent = "🙈";
        } else {
            input.type = "password";
            boton.textContent = "👁";
        }
    });
});