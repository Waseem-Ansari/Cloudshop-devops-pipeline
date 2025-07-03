const express = require('express');
const app =express();
const port = ProcessingInstruction.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from DevOps CI/CD pipeline!');
});
 
app.listen(port, () => {
  console.log('App running on port 3000');
});