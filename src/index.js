const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
// Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({

}));

const port = 4200
  app.listen(port, () => {
    console.log(`Server run in port ${port}`)
});

