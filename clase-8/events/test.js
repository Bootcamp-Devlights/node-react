const { evento } = require("./index");

evento.emit("prueba2", { name: "Pepito" });

evento.on("prueba", (data) => {
  console.log("data de prueba2", data)
});
