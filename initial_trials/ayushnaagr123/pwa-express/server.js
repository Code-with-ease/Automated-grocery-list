const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs')
const loki = require('lokijs');
var users;
const app = express();
var db;
function loadHandler() {
  console.log('hello')
  // const db = new loki('test.json', {autoload: true, autoloadCallback: loadHandler});
  users = db.getCollection('test');
  if (!users) {
    console.log('new')
    users=db.addCollection('test');
  }
  db.saveDatabase()
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/api/customers', (req, res) => {
  var customers;
  var customers = users;
  res.json(customers);
});

app.post('/api/addCustomer',(req,res)=>{
  console.log(req.body)
  var fname = req.body.fname
  var lname = req.body.lname
  // var db = new loki('test.json', {autoload: true, autoloadCallback: loadHandler});
  users.insert({ firstName: fname, lastName: lname});
  console.log(users.data)
  db.saveDatabase()
  res.redirect('/')
})

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}

const port = process.env.PORT||5000;

app.listen(port, () =>{
   console.log(`Server running on port ${port}`);
   db = new loki('test.json', {autoload: true, autoloadCallback: loadHandler});
  //  users = db.addCollection("customers");
  //  users.chain().remove()
});