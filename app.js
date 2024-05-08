import express from 'express';
import { engine } from 'express-handlebars';
import * as router from './routes/html-routes.js';
const PORT = process.env.PORT || 8000;

//express initialized
const app = express();

//handlebars initialized
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//sets 'public' folder as static directory
app.use(express.static('public'));

//router added
app.use(router.route);

//listening for server
app.listen(PORT, () => {
    console.log(`Server live on port ${PORT}!`);
});