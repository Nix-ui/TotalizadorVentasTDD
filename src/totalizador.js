function calcTotal(cantidad , precioUnitario)
{
    return cantidad * precioUnitario; 
}
function obtenerTazaImpuesto ( estado)
{
    return 0.0825; 
}
export  {calcTotal, obtenerTazaImpuesto}; 