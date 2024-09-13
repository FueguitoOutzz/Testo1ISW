const numeros = [1, 2, 3, 4, 5, 6, 7];

//1.
function suma(array) {
    let suma=0;
    for(let i=0;i<array.length;i++){
        suma+=array[i];
    }
    return suma;
}

//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedio(array) {
    return prom=suma(array)/array.length;
}

//3.Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function mayusculas(array) {
    let arrayMayusculas=[];
    for(let i=0;i<array.length;i++){
        arrayMayusculas.push(array[i].toUpperCase());
    }
    return arrayMayusculas;
}

//4.Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function pares(array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            console.log(array[i]);
        }
    }
    return;
}