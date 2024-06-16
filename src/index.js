const express = require("express");
const equipmentRoute = require("./routes/equipment");
const userRoute = require("./routes/user");
const loginRoute = require("./routes/login");
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// MongoDB connection URL - replace 'your_database_url' with your actual connection string
const mongoDB = 'mongodb+srv://lucassouzadavanso:pIdNeKcxNqwrB9Jg@cluster0.ritkau7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/equipments', equipmentRoute);
app.use('/users', userRoute);
app.use('/login', loginRoute);

const port = 8000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});