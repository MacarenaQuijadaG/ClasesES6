import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

// Primer caso
let montoBrutoAnual_1 = 300000;
let deducciones_1 = 50000;

let impuestos_1 = new Impuestos(montoBrutoAnual_1, deducciones_1);
let clientes_1 = new Clientes('pancrasio', impuestos_1);


if (clientes_1.impuesto.validarNumero(montoBrutoAnual_1) && clientes_1.impuesto.validarNumero(deducciones_1)) {
    // Llamada al método validarMontoYDeducciones directamente desde clientes_1
    console.log(`Cliente 1: ${clientes_1.nombre}, su Monto Bruto es: ${impuestos_1.montoBrutoAnual} y sus deducciones son: ${deducciones_1} `);

    if (clientes_1.validarMontoYDeducciones() == 0) {

        console.log("El monto bruto anual y las deducciones deben ser valores positivos. Reingrese sus valores.");

    } else {
        console.log(clientes_1.calcularImpuesto(montoBrutoAnual_1, deducciones_1));
    }
    console.log(`*************************************************`);

}



// Segundo caso
let montoBrutoAnual_2 = 100000;
let deducciones_2 = 80000;

let impuestos_2 = new Impuestos(montoBrutoAnual_2, deducciones_2);
let clientes_2 = new Clientes('miguel', impuestos_2);

if (clientes_2.impuesto.validarNumero(montoBrutoAnual_2) && clientes_2.impuesto.validarNumero(deducciones_2)) {
    // Llamada al método validarMontoYDeducciones directamente desde clientes_2
    console.log(`Cliente 2: ${clientes_2.nombre}, su Monto Bruto es: ${impuestos_2.montoBrutoAnual} y sus deducciones son: ${deducciones_2} `);

    if (clientes_2.validarMontoYDeducciones() == 0) {

        console.log("El monto bruto anual y las deducciones deben ser valores positivos. Reingrese sus valores.");

    } else {
        console.log(clientes_2.calcularImpuesto(montoBrutoAnual_2, deducciones_2));
    }
    console.log(`*************************************************`);
}


// Tercer caso
let montoBrutoAnual_3 = 200000;
let deducciones_3 = -10000;

let impuestos_3 = new Impuestos(montoBrutoAnual_3, deducciones_3);
let clientes_3 = new Clientes('juanito', impuestos_3);

if (clientes_3.impuesto.validarNumero(montoBrutoAnual_3) && clientes_3.impuesto.validarNumero(deducciones_3)) {
    // Llamada al método validarMontoYDeducciones directamente desde clientes_1
    console.log(`Cliente 3: ${clientes_3.nombre}, su Monto Bruto es: ${impuestos_3.montoBrutoAnual} y sus deducciones son: ${deducciones_3} `);

    if (clientes_3.validarMontoYDeducciones() == 0) {

        console.log("El monto bruto anual y las deducciones deben ser valores positivos. Reingrese sus valores.");

    } else {
        console.log(clientes_3.calcularImpuesto(montoBrutoAnual_3, deducciones_3));
    }
    console.log(`*************************************************`);
}