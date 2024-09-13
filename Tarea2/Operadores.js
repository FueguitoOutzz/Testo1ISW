//Operadores de asignación y comparación
const num1=15;
const num2=20;
const num3='25';

if(num1=>num2){
    console.log('num1 es mayor que num2');
}else if(num1<=num2){
    console.log('num1 es menor que num2');
}else if(num1<num3){
    console.log('num1 es menor que num3');
}else if(num3<num2){
    console.log('num3 es menor que num2');
}else if(num3!=num2){
    console.log('num3 es diferente que num2');
}else if(num1===num3){
    console.log('num1 es igual a num3');
}