const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./router/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kartik-DB:kartik11@kartik0.ctgmypp.mongodb.net/test=true")  

.then( () => console.log("MongoDb is Ready for you"))
.catch ( err => console.log(err));

app.use('/', route);



app.listen(3000, function () {
    console.log('Express app running on port ' + (3000))
});