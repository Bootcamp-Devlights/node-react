for (let i = 0; i < 10; i += 2) {
  console.log("i es =", i);
}

const persona = {
  name: "Agustin",
  lastname: "Ramirez"
}

for (let property in persona) {
  console.log("property", property);
  console.log(persona[property])

  persona.lastname
}

while(persona.name === "Agustin") {
  // hacer algo
}

do {
  // ejecutar algo
} while(persona.lastname === "Ramirez");