import { dividir } from "./mathFunction";
import { multiplicar } from "./mathFunction";

//Prueba de división de dos números
it('should return 2 with 6 / 3', () =>{
    expect(dividir(6,3)).toEqual(2);
})

//Prueba de multiplicación de dos números
it('should return 10 with 5 * 2', ()=>{
    expect(multiplicar(5,2)).toEqual(10);
})