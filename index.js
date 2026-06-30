const express = require('express');
const app = express();

app.get('/auth/verify', (req, res) => {
  res.json({ status: 'ok', user: 'test-user' });
});

app.listen(3000, () => {
  console.log('Auth service running on port 3000');
});
