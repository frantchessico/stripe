const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('.hbs', exphbs({

}));

const port = 4200
  app.listen(port, () => {
    console.log(`Server run in port ${port}`)
});

