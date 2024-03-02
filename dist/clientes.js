"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Clientes = /*#__PURE__*/function () {
  function Clientes(nombre, impuesto) {
    _classCallCheck(this, Clientes);
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  _createClass(Clientes, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    },
    set: function set(nuevo_impuesto) {
      this._impuesto = nuevo_impuesto;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var resultado = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
      return "El impuesto es: ".concat(resultado);
    }
  }, {
    key: "validarMontoYDeducciones",
    value: function validarMontoYDeducciones() {
      if (this._impuesto.montoBrutoAnual < 0 || this._impuesto.deducciones < 0) {
        return 0;
      } else if (this._impuesto.deducciones > this._impuesto.montoBrutoAnual * 0.45) {
        console.log("Queda exonerado de Impuestos Anuales, sus deducciones superan el monto bruto anual");
      } else {
        console.log("Proceso Normal");
      }
    }
  }]);
  return Clientes;
}();
var _default = exports["default"] = Clientes;