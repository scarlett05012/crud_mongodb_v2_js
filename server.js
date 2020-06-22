require('./models/db');

const express = require('express');
const path = require('path');
const Handlebars = require('handlebars');
const handlebars = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;
const employeeController = require('./controller/employeeController');

app.listen(port, ()=>{
    console.log("server started at port : "+ port);
});

app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs', handlebars({ extname: 'hbs', defaultLayout: 'mainLayout', handlebars: allowInsecurePrototypeAccess(Handlebars), layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.use('/employee', employeeController);