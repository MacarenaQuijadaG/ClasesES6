import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

// Primer caso
let montoBrutoAnual_1 = 300000;
let deducciones_1 = 50000;

let impuestos_1 = new Impuestos(montoBrutoAnual_1, deducciones_1);
let clientes_1 = new Clientes('pancrasio', impuestos_1);

if (clientes_1.impuesto.validarNumero(montoBrutoAnual_1) && clientes_1.impuesto.validarNumero(deducciones_1)) {
    // Assuming you have a defined calcularImpuestos function
    console.log(`El ${clientes_1.nombre} tiene un impuesto de ${clientes_1.calcularImpuesto()}`);
}

// Segundo caso
let montoBrutoAnual_2 = 100000;
let deducciones_2 = 50000;

let impuestos_2 = new Impuestos(montoBrutoAnual_2, deducciones_2);
let clientes_2 = new Clientes('miguel', impuestos_2);

if (clientes_2.impuesto.validarNumero(montoBrutoAnual_2) && clientes_2.impuesto.validarNumero(deducciones_2)) {
    console.log(`El ${clientes_2.nombre} tiene un impuesto de ${clientes_2.calcularImpuesto()}`);
}

// Tercer caso
let montoBrutoAnual_3 = 200000;
let deducciones_3 = -50000;

let impuestos_3 = new Impuestos(montoBrutoAnual_3, deducciones_3);
let clientes_3 = new Clientes('juanito', impuestos_3);

if (clientes_3.impuesto.validarNumero(montoBrutoAnual_3) && clientes_3.impuesto.validarNumero(deducciones_3)) {
    console.log(`El ${clientes_3.nombre} tiene un impuesto de ${clientes_3.calcularImpuesto()}`);
}