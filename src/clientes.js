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
        const resultado = this._impuesto.montoBrutoAnual - this._impuesto.deducciones;
        return resultado;
    }
     validarMontoYDeducciones() {
        
        if (this.montoBrutoAnual < 0 || this.deducciones < 0) {
                throw new Error('El monto bruto anual y las deducciones deben ser valores positivos');
        }
        if (this.deducciones > this.montoBrutoAnual * 0.45) {
                console.log("Queda exonerado de Impuestos Anuales");
                return true;
        }
            
        return false; 
    };
}

export default Clientes;