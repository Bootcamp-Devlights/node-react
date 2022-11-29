const persona = {
  edad: 25,
  mostrarEdad: function() {
    console.log(this)
    // ejecutar
    console.log("edad: ", this.edad);
  }
}

persona.mostrarEdad();

class Persona {
  static nombre = "Agustin";
  edad = 15;

  mostrarEdad() {
    console.log(this.edad);
  }

  // Metodo estatico
  static mostrarNombre() {
    console.log(this.nombre);
  }
}

// Llamando a metodo estatico sin instanciar la clase
Persona.mostrarNombre();

const personaClase = new Persona();
personaClase.mostrarEdad();