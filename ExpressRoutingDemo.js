const express = require('express');
const app = express();
const port = 3000;

// Step 2: Middleware
app.use(express.json());

// Step 3: GET root route
app.get('/', (req, res) => {
  res.send('GET request received at root!');
});

// Step 4: POST route
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send(`POST request received with data: ${JSON.stringify(req.body)}`);
});

// Step 5: PUT route
app.put('/data', (req, res) => {
  console.log(req.body);
  res.send(`PUT request received. Updated data: ${JSON.stringify(req.body)}`);
});

// Step 6: DELETE route
app.delete('/data', (req, res) => {
  res.send('DELETE request received. Data deleted!');
});

// Step 7: Dynamic route with URL parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Dynamic GET request received for user ID: ${userId}`);
});

// Step 8: Start the server
app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`);
});
