//Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    Genero: 'Masculino',
}
console.log(persona);

//Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. 
//Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const caja = {
    cuadernos: ['ProArte', 'Norma', 'Cuadriculado'],
    lapices: ['Staedtler', 'Faber Castell'],
    fotografias: ['Familiares', 'Amigos'],
    estado: ['Nueva', 'Usada'],
}

console.log(caja);
console.log(typeof caja);
console.log(caja.cuadernos);
console.log(typeof caja.cuadernos);
console.log(caja.lapices);
console.log(typeof caja.lapices);
console.log(caja.fotografias);
console.log(typeof caja.fotografias);
console.log(caja.estado);
console.log(typeof caja.estado);