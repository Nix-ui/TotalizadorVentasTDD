import {calcTotal, obtenerTazaImpuesto} from "./totalizador"; 

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
}); 