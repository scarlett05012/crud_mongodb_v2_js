const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.',
        minlength: [4,'Minimum of 4 characters.']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Invalid e-mail.']
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

// employeeSchema.path('email').validate((val)=>{
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);