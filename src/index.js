const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
// Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
defaultLayout: 'main',
layoutsDir: path.join(app.get('views'), 'layout'),
partialsDir: path.join(app.get('views'), 'partials'),
extname: '.hbs'
}));


// Midleware:
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes 
app.use(require('./routes/router'));

//Static Files 
app.use(express.static(path.join(__dirname, 'public')));

const port = 4200
  app.listen(port, () => {
    console.log(`Server run in port ${port}`)
});

