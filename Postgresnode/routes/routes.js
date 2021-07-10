//Routes File 
var express = require('express');
var router = express.Router();
const { login_user } = require('../user/login');
const { adduser } = require('../services/userservice');

router.post('/adduser', async (req, res) => {
  try{
    await adduser(req.body);
    res.status(200).json({message: "Successfull", status: true});
  } catch(err){
    res.status(500).send({message: err.message});
  }
})
router.get('/', async function(req, res) {
  
  let me = await login_user();
     console.log(me);

  res.status(200).send(me);
})

module.exports = router;