import calcTotal from "./totalizador"; 

describe("Funcion de ingresar la cantidad del producto", () => {
it ("deberia mostrar la cantidad de prodcutos ingresados", () =>{
    expect(calcTotal(20, 5)).toEqual(100); 
    }); 
}); 