require('dotenv').config();
const express = require('express');
const app = express();
const cors=require('cors');
const connection=require('./db')
const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
//database 
connection();
//middlewares
app.use(express.json())
app.use(cors());
//routes
app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);


// app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port,() => console.log(`Server running on port ${port}...`));