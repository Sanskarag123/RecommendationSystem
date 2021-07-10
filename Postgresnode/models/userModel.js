//model  File 
const yup = require('yup')
const userSchema = yup.ObjectSchema({
    user_id: yup.string().required("User Id is required"),
    dob: yup.string(),
    orderhistory: yup.string(),
})
module.exports = userSchema;