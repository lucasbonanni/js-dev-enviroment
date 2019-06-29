import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();
app.use(compression());
app.use(express.static("dist"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get('/users', function(req, res) {
  res.json([
    { "id": 1, "firstName": "Ramonda", "lastName": "Gorghetto", "email": "rgorghetto0@bloomberg.com" },
    { "id": 2, "firstName": "Jennifer", "lastName": "Minster", "email": "jminster1@eepurl.com" },
    { "id": 3, "firstName": "Danica", "lastName": "Lyddiard", "email": "dlyddiard2@cornell.edu" },
    { "id": 4, "firstName": "Con", "lastName": "Kinnach", "email": "ckinnach3@xing.com" },
    { "id": 5, "firstName": "Cosimo", "lastName": "Godsal", "email": "cgodsal4@example.com" }]);
});


app.listen(port, function(error){
  if(error){
    console.log(error);
  } else{
    //console.log(__dirname, config.output.publicPath, config.entry)
    open('http://localhost:' + port);
  }
})

