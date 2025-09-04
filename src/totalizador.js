function calcTotal(cantidad , precioUnitario){
    return cantidad * precioUnitario; 
}
function obtenerTazaImpuesto ( estado){
    return estado === "CA"? 0.0825 : estado == "UT" ? 0.0665 :  0.08 ; 
}

export  {calcTotal, obtenerTazaImpuesto}; 