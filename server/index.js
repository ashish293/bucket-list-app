const express = require('express');

const PORT = 8888;
const app = express();

const mount = () => {
  app.listen(PORT);
  console.log('Server is running at port 8888');
};

app.use('/abc', (req, res) => {
  res.send('Hello world');
});

mount(app);
