import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

let impuestos1 = new Impuestos(1545454, 546464 );
console.log(impuestos1.montoBrutoAnual);
console.log(impuestos1.deducciones);


let clientes1 = new Clientes('pancrasio', impuestos1);
console.log(clientes1.nombre);
console.log(clientes1.impuestos);

//funcion num negativo, numero mayor que (if) validaciones

