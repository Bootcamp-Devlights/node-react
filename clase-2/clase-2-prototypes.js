function Persona() {
  this.edad = 25;
  this.mostrarEdad = function() {
    console.log(this)
    // ejecutar
    console.log("edad: ", this.edad);
  };
  this.direccion = {
    calle: "Algo",
    lugar: {
      provincia: 'Corrientes'
    }
  }
}

Persona.prototype.correr = function() {
  // ejecutar
  console.log("Corriendo!");
}

const agustin = new Persona();
agustin.correr();
console.log(Object.getPrototypeOf(agustin))