const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Other routes and middleware...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
