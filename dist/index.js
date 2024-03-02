"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Primer caso
var montoBrutoAnual_1 = 300000;
var deducciones_1 = 50000;
var impuestos_1 = new _impuestos["default"](montoBrutoAnual_1, deducciones_1);
var clientes_1 = new _clientes["default"]('pancrasio', impuestos_1);
if (clientes_1.impuesto.validarNumero(montoBrutoAnual_1) && clientes_1.impuesto.validarNumero(deducciones_1)) {
  // Llamada al método validarMontoYDeducciones directamente desde clientes_1
  console.log("Cliente 1: ".concat(clientes_1.nombre, ", su Monto Bruto es: ").concat(impuestos_1.montoBrutoAnual, " y sus deducciones son: ").concat(deducciones_1, " "));
  if (clientes_1.validarMontoYDeducciones() == 0) {
    console.log("El monto bruto anual y las deducciones deben ser valores positivos. Reingrese sus valores.");
  } else {
    console.log(clientes_1.calcularImpuesto(montoBrutoAnual_1, deducciones_1));
  }
  console.log("*************************************************");
}

// Segundo caso
var montoBrutoAnual_2 = 100000;
var deducciones_2 = 80000;
var impuestos_2 = new _impuestos["default"](montoBrutoAnual_2, deducciones_2);
var clientes_2 = new _clientes["default"]('miguel', impuestos_2);
if (clientes_2.impuesto.validarNumero(montoBrutoAnual_2) && clientes_2.impuesto.validarNumero(deducciones_2)) {
  // Llamada al método validarMontoYDeducciones directamente desde clientes_2
  console.log("Cliente 2: ".concat(clientes_2.nombre, ", su Monto Bruto es: ").concat(impuestos_2.montoBrutoAnual, " y sus deducciones son: ").concat(deducciones_2, " "));
  if (clientes_2.validarMontoYDeducciones() == 0) {
    console.log("El monto bruto anual y las deducciones deben ser valores positivos. Reingrese sus valores.");
  } else {
    console.log(clientes_2.calcularImpuesto(montoBrutoAnual_2, deducciones_2));
  }
  console.log("*************************************************");
}

// Tercer caso
var montoBrutoAnual_3 = 200000;
var deducciones_3 = -10000;
var impuestos_3 = new _impuestos["default"](montoBrutoAnual_3, deducciones_3);
var clientes_3 = new _clientes["default"]('juanito', impuestos_3);
if (clientes_3.impuesto.validarNumero(montoBrutoAnual_3) && clientes_3.impuesto.validarNumero(deducciones_3)) {
  // Llamada al método validarMontoYDeducciones directamente desde clientes_3
  console.log("Cliente 3: ".concat(clientes_3.nombre, ", su Monto Bruto es: ").concat(impuestos_3.montoBrutoAnual, " y sus deducciones son: ").concat(deducciones_3, " "));
  if (clientes_3.validarMontoYDeducciones() == 0) {
    console.log("El monto bruto anual y las deducciones deben ser valores positivos. Reingrese sus valores.");
  } else {
    console.log(clientes_3.calcularImpuesto(montoBrutoAnual_3, deducciones_3));
  }
  console.log("*************************************************");
}