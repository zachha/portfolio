import express from 'express';
import { engine } from 'express-handlebars';
import router from  './routes/html-routes.js';
const PORT = process.env.PORT || 8000;
const app = express();

//handlebars initialized
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//sets 'public' folder as static directory
app.use(express.static('public'));

//Handles url routes 
app.use('/', router);

//listening for server
app.listen(PORT, () => {
    console.log(`Server live on port ${PORT}!`);
});