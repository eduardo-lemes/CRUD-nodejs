/**
 * File: server.js
 * Description: arquivo responsável por toda a configuração e execução da aplicação.
 * Data: 01/13/2020
 * Author: Elemes
 */

 const app = require('./src/app');

 const port = process.env.PORT || 3000;
 
 app.listen(port, () => {
   console.log('Aplicação executando na porta ', port);
 });