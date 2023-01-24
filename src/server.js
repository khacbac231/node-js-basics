import express from 'express';
import configViewEngine from './configs/viewEngine';
import initRouter from './router/web';
// import connection from './configs/connectdb';
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

//set up view engine
configViewEngine(app);
//init router
initRouter(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})