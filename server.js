const express  = require('express');
const path = require('path');

const app = express();
const port = 9000;
app.use(express.static(path.join(__dirname,'build')));

app.get('/', function(req,res){
    console.log("request for doc learn web");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, ()=>{
    console.log('doc-learn-web started on port :', port);
});