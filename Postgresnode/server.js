//Server File  
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require("cors")
const app = express();
const pool = require('./services/connection');
app.use(cors())
app.use(bodyParser.json());

app.use('/api',routes);
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.get('/',function(req,res){
    res.send('connected to Server')
})


pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: 'placement',
    user: 'postgres',
    password: 'jaihind',
  })
  .then((res) => {
      console.log(res);
    app.listen(3005, () => {
      console.log('Listening on port 3005');
    });
  })
  .catch((err) => console.error(err));



module.exports = app;