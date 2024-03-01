import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

//primer caso
let montoBrutoAnual_1 = 300000;
let deducciones_1 = 50000;

validarnumero(montoBrutoAnual_1);
validarnumero(deducciones_1);

let impuestos_1 = new Impuestos(montoBrutoAnual_1, deducciones_1);
let clientes_1 = new Clientes('pancrasio', impuestos_1);

if(validarnumero(montoBrutoAnual_1) && validarnumero(deducciones_1)) {
    // calcularImpuestos(montoBrutoAnual_1, deducciones_1);
    console.log(`El ${clientes_1.nombre} tiene un impuesto de ${calcularImpuestos(montoBrutoAnual_1, deducciones_1)}`);
}

//segundo caso
let montoBrutoAnual_2 = 100000;
let deducciones_2 = 50000;

validarnumero(montoBrutoAnual_2);
validarnumero(deducciones_2);

let impuestos_2 = new Impuestos(montoBrutoAnual_2, deducciones_2);
let clientes_2 = new Clientes('miguel', impuestos_2);

if(validarnumero(montoBrutoAnual_2) && validarnumero(deducciones_2)) {
    // calcularImpuestos(montoBrutoAnual_1, deducciones_1);
    console.log(`El ${clientes_2.nombre} tiene un impuesto de ${calcularImpuestos(montoBrutoAnual_2, deducciones_2)}`);
}

// tercer caso
let montoBrutoAnual_3 = 200000;
let deducciones_3 = -50000;

validarnumero(montoBrutoAnual_3);
validarnumero(deducciones_3);

let impuestos_3 = new Impuestos(montoBrutoAnual_3, deducciones_3);
let clientes_3 = new Clientes('juanito', impuestos_3);

if(validarnumero(montoBrutoAnual_3) && validarnumero(deducciones_3)) {
    // calcularImpuestos(montoBrutoAnual_1, deducciones_1);
    console.log(`El ${clientes_3.nombre} tiene un impuesto de ${calcularImpuestos(montoBrutoAnual_3, deducciones_3)}`);
}