import express from 'express';
import ip from 'ip'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express()

app.set('view engine',"ejs");
app.set('views','view');
//app.use(express.cookieParser());
//app.use(express.session({ secret: sessionVal }));
//app.use(app.route);

app.use(express.static(__dirname+'/public'));


app.get('/', function(req, res) {

    res.render('connection')
    
});

app.get('/inscription',function(req,res){
    res.render('inscription')
});

app.get('/connection', function(req, res) {

    res.render('connection')
    
});



app.listen(8080,"localhost",() => {
    console.log(`Example app listening at port 8080`)
    console.dir (ip.address() )
});
