const mongoose = require('mongoose');
const dbname = "EmployeeDB";
const url = "mongodb://localhost:27017/";
const mongoOptions = {useNewUrlParser : true, useUnifiedTopology : true};

mongoose.connect(url + dbname, mongoOptions, (err)=>{
    if(!err){
        console.log("Connection succeeded!")
    }else{
        console.log("Connection Failed!")
    }

});

require('./employee.model');