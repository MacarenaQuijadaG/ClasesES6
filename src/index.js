import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

// Primer caso
let montoBrutoAnual_1 = 300000;
let deducciones_1 = 50000;

let impuestos_1 = new Impuestos(montoBrutoAnual_1, deducciones_1);
let clientes_1 = new Clientes('pancrasio', impuestos_1);


if (clientes_1.impuesto.validarNumero(montoBrutoAnual_1) && clientes_1.impuesto.validarNumero(deducciones_1)) {
    // Llamada al método validarMontoYDeducciones directamente desde clientes_1
    console.log(`Cliente 1: ${clientes_1.nombre}, su Monto Bruto es: ${impuestos_1.montoBrutoAnual}`);
    clientes_1.calcularImpuesto(montoBrutoAnual_1, deducciones_1);  // preguntar por qué no muestra el resultado
    clientes_1.validarMontoYDeducciones();

}

// Segundo caso
let montoBrutoAnual_2 = 100000;
let deducciones_2 = 80000;

let impuestos_2 = new Impuestos(montoBrutoAnual_2, deducciones_2);
let clientes_2 = new Clientes('miguel', impuestos_2);

if (clientes_2.impuesto.validarNumero(montoBrutoAnual_2) && clientes_2.impuesto.validarNumero(deducciones_2)) {
    // Llamada al método validarMontoYDeducciones directamente desde clientes_1
    console.log(`Cliente 2: ${clientes_2.nombre}, su Monto Bruto es: ${impuestos_2.montoBrutoAnual}`);
    clientes_2.validarMontoYDeducciones()
}


// Tercer caso
let montoBrutoAnual_3 = 200000;
let deducciones_3 = -10000;

let impuestos_3 = new Impuestos(montoBrutoAnual_3, deducciones_3);
let clientes_3 = new Clientes('juanito', impuestos_3);


if (clientes_3.impuesto.validarNumero(montoBrutoAnual_3) && clientes_3.impuesto.validarNumero(deducciones_3)) {
    // Llamada al método validarMontoYDeducciones directamente desde clientes_1
    console.log(`Cliente 3: ${clientes_3.nombre}, su Monto Bruto es: ${impuestos_3.montoBrutoAnual}`);
    clientes_3.validarMontoYDeducciones();


}