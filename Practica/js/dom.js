console.log("---------------------- EJEMPLO DE MANEJO DEL DOM ----------------------");

const formulario = document.getElementById("formulario");
const btnEjemplo = document.getElementById("btnEjemplo");

btnEjemplo.addEventListener("click", () => {
    alert("Hola! Soy un botón");


})

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); /// evita que se recargue la pagina
    // Consultamos el DOM
    let precio=0;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let dni = document.getElementById('dni').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let tipoSeguroSelect = document.getElementById('tipoSeguro');
    let tipoSeguro = "";
    if (tipoSeguroSelect.value === "1") {
        tipoSeguro = "Básico";
        precio=500;
    } else if (tipoSeguroSelect.value === "2") {
        tipoSeguro = "Intermedio";
        precio=1000;
    } else if (tipoSeguroSelect.value === "3") {
        tipoSeguro = "Premium";
        precio=1500;
    }
    let consulta = document.getElementById('textAreaConsulta').value;
    /// modificamos el DOM
    document.getElementById("textoResultado").innerText = "Nombre: " + nombre + " - Apellido: " + apellido + " - DNI: " + dni + " - Email: " + email + " - Telefono: " + telefono + " - Tipo de seguro: " + tipoSeguro + " - Precio: $" + precio+ " - Consulta: " + consulta;

})
