const express= require('express');
const app= express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const knex = require('knex')({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'jmansi',
    password : 'Pr3rjPr3rj',
    database : ''
       searchPath: ['knex', 'public']
  }
 });
//const pg = require('knex')({
 // client: 'pg',
  //connection: process.env.PG_CONNECTION_STRING,
  //searchPath: ['knex', 'public'],
//});



//app.post('./signin',(req,res)=>{
//	knex.select().from('info')
//});


app.listen(3030,()=>{console.log("app runni9ng")});

//signin->post
//register->post
//home->get