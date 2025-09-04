function calcTotal(cantidad , precioUnitario)
{
    return cantidad * precioUnitario; 
}
function obtenerTazaImpuesto ( estado)
{
    return estado === "CA"? 0.0825 : 0.0665; 
}
export  {calcTotal, obtenerTazaImpuesto}; 