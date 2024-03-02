class Clientes {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    get impuesto() {
        return this._impuesto;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    set impuesto(nuevo_impuesto) {
        this._impuesto = nuevo_impuesto;
    }

    calcularImpuesto() {
        const resultado = (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
        return (`El impuesto es: ${resultado}`);
    }


    validarMontoYDeducciones() {

        if (this._impuesto.montoBrutoAnual < 0 || this._impuesto.deducciones < 0) {
            return 0;
        }
        else if (this._impuesto.deducciones > this._impuesto.montoBrutoAnual * 0.45) {
            console.log("Queda exonerado de Impuestos Anuales, sus deducciones superan el monto bruto anual");
        } else {
            console.log("Proceso Normal")
        }

    };
}

export default Clientes;