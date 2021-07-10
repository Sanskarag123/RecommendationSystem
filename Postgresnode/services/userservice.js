const conn = require('./connection');



const  adduser = (userdetail) => {
    try{
        if(user_id in userdetail){
            conn.query(`
            INSERT INTO USERS(ID) VALUES('${userdetail.user_id}');
            `);
        } else {
            throw new Error("Key Error");
        }
    } catch(err){
        throw new Error("Database Error");
    }
}
const  addaddress = (userdetail) => {
    try{
        if((user_id in userdetail) && (line1 in userdetail) && (city in userdetail) && (state in userdetail)){
            conn.query(`
            UPDATE USERS
             set line1='${userdetail.line1}', city = '${userdetail.city}', state='${userdetail.state}'
             WHERE ID = '${userdetail.user_id}';
            `);
        } else {
            throw new Error("Key Error");
        }
    } catch(err){
        throw new Error(err.message == "Key Error"?err.message:"Database Error");
    }
}


module.exports = {adduser, addaddress};