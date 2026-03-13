/*'use strict';
http = require('http');
const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo');
});
server.listen(5000);*/

const express = require('express')
const app = express()
const port = 3000

app.get('/prueba', (req, res) => {
    res.send('¡Hola. Hello!')
})

app.listen(port, ()=>{
    console.log('La aplicación se está ejecutando en el puerto ' + port)
})