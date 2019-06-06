const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('styles'));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);


app.listen(3000,()=>{
    console.log('Servidor funcionando en el puerto 3000');
});

app.get('/tablero',(req,res)=>{
    res.render('tableroPrincipal.html');
});


