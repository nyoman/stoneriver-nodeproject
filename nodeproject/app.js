var express = require("express");
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    //res.send("Aloha World!");
    res.render('index', { 
        //list: ['first val', '2nd val', '3rd val', '4th val']
        nav: ['Services', 'Portfolio', 'About', 'Team', 'Contact']
    });
});

// app.get('/', function(req, res) {
//     //res.send('Hi ING ..');
//     res.render('index', { 
//         list: ['first val', '2nd val', '3rd val'],
//         //list: ['Services', 'Portfolio', 'About', 'Team', 'Contact']
//     });
// });

app.get('/routing', function(req, res) {
   res.send("Aloha ROUTING"); 
});

app.listen(port, function(err) {
   console.log("The server is running on port: " + port); 
});