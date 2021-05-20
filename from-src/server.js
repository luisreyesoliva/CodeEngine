const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Code Engine</title>
  </head>
  <body>
    Hola un saludo a los asistentes al Code Zone del Technology summit
  </body>
</html>`);
});

app.listen(port);
