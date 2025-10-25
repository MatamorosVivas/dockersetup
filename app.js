const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is node.js that will be used with docker');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});