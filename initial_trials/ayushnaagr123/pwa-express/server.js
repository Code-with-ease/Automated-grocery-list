const express = require('express');
const fs = require('fs')

const app = express();
 
app.get('/api/customers', (req, res) => {
  var customers;
  fs.readFile('customers.json',(err,data)=>{
    if(err) throw err;
    customers=JSON.parse(data);
    customers=JSON.stringify(customers)
  });
  res.json(customers);
});

app.post('/api/addCustomer',(req,res)=>{
  var fname = req.body.fname
  var lname = req.body.lname
  var customers;
  fs.readFile('customers.json',(err,data)=>{
    if(err) throw err;
    customers=JSON.parse(data);
    id=customers.length
    customers.push({id:id+1,firstName:fname,lastName:lname})

    console.log(customers)
  })
  setTimeout(()=>{
    fs.writeFile('customers.json','',(err)=>{
      if(err) throw err;
    }),300});
    customers.forEach(element => {
    fs.appendFile('customers.json',JSON.stringify(element),(err)=>{
      if(err) throw err;
    })});
  });

if(process.env.NODE_ENV == 'production'){
  app.use(express.static('client/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}

const port = process.env.PORT||5000;

app.listen(port, () => `Server running on port ${port}`);