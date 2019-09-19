var app=require('express')()
const fetch=require('node-fetch')

fetch('http://127.0.0.1:5000/todo/api/v1.0/tasks')
.then(response=>response.json())
.then(data=>{
    console.log(data)
})
