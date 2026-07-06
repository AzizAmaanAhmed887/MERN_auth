const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser =require('body-parser')
const cors = require('cors')

const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(cors())
app.use('/auth', AuthRouter)
app.use('/product', ProductRouter)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected Mongo Atlas"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})