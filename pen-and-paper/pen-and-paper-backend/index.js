const express = require('express');
      app = express();
      request = require("request"),
      bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let boxdata = [];

for (i=0 ; i<=100; i++){
    if(i%10 === 0 && i<100){
        boxdata.push({
            class : 'singularBox btrb ',
        });
    }
        else if (i > 90 && i < 100){
            boxdata.push({
                class : 'singularBox blbb ',
            });
        }
        else if (i === 100) {
            boxdata.push({
                class : 'singularBox ball ',
                
            });
        }
        else {
            boxdata.push({
                class : 'singularBox bltb ',
            });   
        }
}
console.log(boxdata);
app.get('/', (req,res)=>{
    res.send(boxdata);
})

app.listen(8080, ()=>{
    console.log('listening on 8080');
})