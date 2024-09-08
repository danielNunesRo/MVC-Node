require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(express.json());
app.use(routes);




app.listen(process.env.PORT, () => {
    console.log(`Server is on in PORT: ${process.env.PORT}`)
});