const express = require("express");
const events = require('events');

console.log("Corriendo desde el comando script");

const evento = new events();

evento.emit("prueba", { name: "Agustin" });

export {
  evento
}