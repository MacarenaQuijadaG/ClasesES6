class Impuestos{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }
    get deducciones() {
        return this._deducciones;
    }
    set montoBrutoAnual(nuevo_montoBrutoAnual) {
        this._montoBrutoAnual = nuevo_montoBrutoAnual;
    }
    set deducciones(nuevo_deducciones) {
        this.nuevo_deducciones = nuevo_deducciones;
    }

    
}

 function validarNumero(parametro) {
    // Verificar si el parámetro es un número
    if (typeof parametro === 'number' && !isNaN(parametro)) {
        return true; // Es un número válido
    } else {
        // Si no es un número, mostrar mensaje de error
        console.error("Por favor, ingrese un número válido.");
        return false;
    }
}

export default  Impuestos;