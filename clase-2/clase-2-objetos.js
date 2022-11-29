const agustin = {
  edad: 25,
  mostrarEdad: function() {
    console.log(this)
    // ejecutar
    console.log("edad: ", this.edad);
  },
  direccion: {
    calle: "Algo",
    lugar: {
      provincia: 'Corrientes'
    }
  }
}

// Eliminar una propiedad de un objeto
delete agustin.edad;

console.log(agustin)

/*
 * Formas de copiar un objeto
*/

const agustin1 = Object.assign({}, agustin);
// Coopia segura y profunda sin punteros de el objeto agustin
const agustin2 = JSON.parse(JSON.stringify(agustin))

agustin2.edad  = 30;
agustin2.direccion.calle = "Otra calle";

console.log(agustin)