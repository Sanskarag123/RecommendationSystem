// const pool_c = require('../services/connection');

const pool = require('../services/connection');

const login = async  () => {   
    let records;
    try{
    return response  = (await pool.query(`
    select * from students;
    `)).rows;
    } catch(err){
        throw new Error("Internal Database error");
    }
    return records;
}
module.exports = {login_user:login}