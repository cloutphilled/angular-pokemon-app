let express = require(`express`);

let app = express();

app.use(express.static(__dirname+`/dist/ng-pokemontrainer`));

app.get(`/*`, (req, resp)=>{
    resp.sendFile(__dirname+"/ng-pokemontrainer/index.html")
});

app.listen(process.env.PORT || 8080);