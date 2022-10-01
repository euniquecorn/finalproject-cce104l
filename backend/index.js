const express = require('express');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const cors = require('cors');

const routes = require('./src/routes');

const app = express();
app.use(cors());
app.use(json());

// mongodb connection
// W2Lc9vtJkshTA3n
// mongodb+srv://admin24:<password>@inventorysystem.2whui7u.mongodb.net/test
mongoose.connect('mongodb+srv://admin24:W2Lc9vtJkshTA3n@inventorysystem.2whui7u.mongodb.net/invsystem', () => {
  console.log('Successfully connected to DB...');
});

// routes
app.get("/", (req, res) => {
  res.send(`Routes '/api' @ port 3000`);
});

app.use("/api", routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Backend server running at port ${port}`);
});

