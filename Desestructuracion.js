const usuario = {
    nombre: 'Diego',
    apellido: 'Salazar',
    edad: 21,
    direccion: {
      calle: 'Villa los corales',
      numero: 123,
      ciudad: 'Concepción',
      pais: 'Chile'
    },
    contactos: {
      telefono: '123456789',
      email: 'diegosalazar@example.com',
      redesSociales: {
        instragram: '@diego',
        linkedin: 'Diego Salazar'
      }
    },
    intereses: ['Programación', 'Música', 'Ajedrez']
};

//1. Utiliza desestructuración para extraer las propiedades nombre, apellido y ciudad del objeto usuario.
console.log(usuario.nombre, usuario.apellido, usuario.direccion.ciudad);

//2. Extrae el primer interés del arreglo intereses en una variable llamada primerInteres.
const [primerInteres]=usuario.intereses;
console.log(primerInteres);

//3. Extrae el email y linkedin de los contactos del usuario.
console.log(usuario.contactos.email, usuario.contactos.redesSociales.linkedin);

//4.Extrae calle y numero de la dirección, pero renómbralos como calleUsuario y numeroUsuario.
const calleusuario=usuario.direccion.calle;
const numerousuario=usuario.direccion.numero;
console.log(calleusuario, numerousuario);