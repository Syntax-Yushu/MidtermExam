const express = require('express');
const app = express();


app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Francis Leonard A. Mahinay' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
