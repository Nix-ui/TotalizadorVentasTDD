import {calcTotal, obtenerTazaImpuesto, calcularDescuento} from "./totalizador"; 

describe("Funcion de ingresar la cantidad del producto", () => {
    it ("deberia mostrar la cantidad de prodcutos ingresados", () =>{
        expect(calcTotal(20, 5)).toEqual(100); 
        }); 
    it ("deberia mostrar la cantidad de prodcutos ingresados", () =>{
        expect(calcTotal(10, 4)).toEqual(40); 
        }); 

    it ("deberia mostrar el impuesto de california", () =>{
        expect(obtenerTazaImpuesto("CA")).toEqual(0.0825); 
        }); 

    it ("deberia mostrar el impuesto de utah", () =>{
        expect(obtenerTazaImpuesto("UT")).toEqual(0.0665); 
        }); 
    it("deberia mostrar el impuesto de Nevada",()=>{
        expect(obtenerTazaImpuesto("NV")).toEqual(0.08);
    });
    it("deberia mostrar el impuesto de Texas",()=>{
        expect(obtenerTazaImpuesto("TX")).toEqual(0.0625);
    });
    it("deberia mostrar el impuesto de Alabama",()=>{
        expect(obtenerTazaImpuesto("AL")).toEqual(0.04);
    });
    it("deberia calcular el descuento para totales menores de 1000",()=>{
        expect(calcularDescuento(800)).toEqual(0);
    });
    it("deberia calcular el descuento para totales mayores  iguales de 1000",()=>{
        expect(calcularDescuento(1800)).toEqual(0.03);
    });
    it("deberia calcular el descuento para totales mayores iguales a 3000",()=>{
        expect(calcularDescuento(3200)).toEqual(0.05);
    });
    it("deberia calcular el descuento para totales mayores iguales a 7000",()=>{
        expect(calcularDescuento(7200)).toEqual(0.07);
    })
}); 