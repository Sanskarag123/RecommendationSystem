// Imports
const yup =  require('yup');
const uuid = require('uuid');

// User Schema
const createacount = new yup.ObjectSchema({
    _id: yup.string().default(uuid.v1()),
    fullname: yup.string().required("Full name is required Field"),
    username: yup.string().required("User name is required Field"),
    password: yup.string().required("Password is required")
});

// User Login Schema
const login = new yup.ObjectSchema({
    username: yup.string().required("User name is required Field"),
    password: yup.string().required("Password is required")
});

//exports
module.exports = { caschema: createacount, loginschema: login};