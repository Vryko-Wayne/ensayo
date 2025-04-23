const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  res.send("Formulario");
});

//apuntes : res.send('envia un texto al navegador en la ruta indicada, en este caso (/add)'.
//Si se quiere enviar un archivo html se puede hacer con res.sendFile('ruta del archivo').
//Si se quiere enviar un archivo html con variables se puede hacer con res.render('nombre del archivo', {variable1: 'valor1', variable2: 'valor2'}).
//Si se quiere enviar un archivo html con variables y una funcion se puede hacer con res.render('nombre del archivo', {variable1: 'valor1', variable2: 'valor2', funcion: function(){return 'hola'}}).

//usar router.get para obtener informacion de la url o enviar informacion al navegador
//usar router.post para enviar informacion al servidor o a la base de datos

router.get("/prueba", (req, res) => {
  res.render("links/pageone");
});

router.get("/prueba2", (req, res) => {
  res.render("links/pagedos");
});

module.exports = router;
