require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

// products route
app.use('/api/v1/products', productsRouter);

// middleware for errors and unknown routes
app.use(notFound);
app.use(errorHandlerMiddleware);

// port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on prot ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
