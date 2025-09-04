function calcTotal(cantidad , precioUnitario){
    return cantidad * precioUnitario; 
}
function obtenerTazaImpuesto ( estado){
    return estado === "CA"? 0.0825 : estado == "UT" ? 0.0665 :  estado == "NV" ? 0.08 : estado == "TX" ? 0.0625 : estado == "AL" ? 0.04 : null ; 
}
function calcularDescuento ( total){
    return total >= 3000? 0.05 : total >=  1000 ? 0.03 : 0 ;
}

export  {calcTotal, obtenerTazaImpuesto, calcularDescuento}; 