const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World, I just finished my 1.1 Lesson Task! Cyclic.sh' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
