
let totalCompra = 0;
let seguirComprando = true;

// Precios de los servicios

const precios = {
  1: 70000, // Día de Spa
  2: 50000, // Masajes
  3: 40000, // Faciales
  4: 100000 // Combos para Regalar
};

function solicitarCantidad(servicioNombre, precioUnitario) {
  let cantidad = Number(prompt(`¿Cuántos ${servicioNombre} desea comprar? (Precio unitario: $${precioUnitario})`));
  
  if (!isNaN(cantidad) && cantidad > 0) {
    totalCompra += cantidad * precioUnitario;
    alert(`Se añadieron ${cantidad} ${servicioNombre} por un total de $${cantidad * precioUnitario}`);
  } else {
    alert("Debe ingresar un número válido mayor a 0");
  }
}

while (seguirComprando) {
  let opcion = Number(prompt(
    "Por favor seleccione el servicio a facturar:\n" +
    "1 - Día de Spa ($70,000)\n" +
    "2 - Masajes ($50,000)\n" +
    "3 - Faciales ($40,000)\n" +
    "4 - Combos para Regalar ($100,000)\n" +
    "5 - Ver Total y Salir"
  ));

  if (!isNaN(opcion)) {
    switch (opcion) {
      case 1:
        solicitarCantidad("Días de Spa", precios[1]);
        break;
      case 2:
        solicitarCantidad("Masajes", precios[2]);
        break;
      case 3:
        solicitarCantidad("Faciales", precios[3]);
        break;
      case 4:
        solicitarCantidad("Combos para Regalar", precios[4]);
        break;
      case 5:
        seguirComprando = false;
        break;
      default:
        alert("Por favor, seleccione una opción válida (1 al 5)");
    }
  } else {
    alert("Debe ingresar un número correcto");
  }
}

alert(`El total de su compra es: $${totalCompra}`);