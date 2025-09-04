function calcTotal(cantidad , precioUnitario){
    return cantidad * precioUnitario; 
}
function obtenerTazaImpuesto ( estado){
    return estado === "CA"? 0.0825 : estado == "UT" ? 0.0665 :  estado == "NV" ? 0.08 : estado == "TX" ? 0.0625 : estado == "AL" ? 0.04 : null ; 
}
function calcularDescuento ( total){
    return 0;
}

export  {calcTotal, obtenerTazaImpuesto, calcularDescuento}; 