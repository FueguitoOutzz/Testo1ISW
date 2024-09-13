//1. Imprimir en consola los números del 1 al 10
for(let i=1;i<=10; i++){
    console.log(i);
}

//2. Imprimir en consola los números del 10 al 1
for(let i=10;i>1; i--){
    console.log(i);
}

//3. Imprimir los números pares del 1 al 10
for(let i=1;i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}

//4. Imprimir los números impares del 1 al 10
for(let i=1;i<=10; i++){
    if(i%2!==0){
        console.log(i);
    }
}

//5. Imprimir en colsola los números del 1 al 10 que sean múltiplos de 3
for(let i=1;i<=10; i++){
    if(i%3==0){
        console.log(i);
    }
}

//6. Imprimir en consola los números del 1 al 10 que sean múltiplos de 5
for(let i=1;i<=10; i++){
    if(i%5==0){
        console.log(i);
    }
}

//7. Imprimir en consola los números del 1 al 10 que sean múltiplos de 3 y 5
for(let i=1;i<=10; i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}

//8. Imprimir en consola los números del 1 al 10 que sean múltiplos de 3 o 5
for(let i=1;i<=10; i++){
    if(i%3==0 || i%5==0){
        console.log(i);
    }
}