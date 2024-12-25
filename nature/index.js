const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello world',
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
