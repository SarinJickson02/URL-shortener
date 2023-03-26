const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/connect');
const urlrouter = require('./routes/urlrouter')
require('dotenv').config();


app.use(express.json());

// routes
app.get('/',(req,res) => {
    res.send("Hello from URL_Shorter server")
})

app.use('/url', urlrouter);

//middleware
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI); //database
        app.listen(port, () =>
            // eslint-disable-next-line no-console
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }
};

start();