document.addEventListener("DOMContentLoaded", function () {

    
    const formulario = document.querySelector("form");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre");
            const correo = document.getElementById("correo");
            const mensaje = document.getElementById("mensaje");

            
            if (
                nombre.value.trim() === "" ||
                correo.value.trim() === "" ||
                mensaje.value.trim() === ""
            ) {
                alert("Por favor, complete todos los campos.");
                return;
            }

            alert(
                "Gracias por comunicarte con Los Cortes de AJ. Te responderemos pronto."
            );

            formulario.reset();
        });
    }

    
    const tarjetasMenu = document.querySelectorAll(".menu-card");

    tarjetasMenu.forEach(function (tarjeta) {
        tarjeta.addEventListener("mouseenter", function () {
            tarjeta.style.transform = "translateY(-8px)";
        });

        tarjeta.addEventListener("mouseleave", function () {
            tarjeta.style.transform = "translateY(0px)";
        });
    });

});