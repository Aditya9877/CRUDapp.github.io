 const express = require('express')
 const mongoose = require('mongoose')
 const url = 'mongodb://localhost:27017/Marketplace'

 const app = express()

 mongoose.connect(url, { useNewurlParser: true })

 const con = mongoose.connection

 con.on('open', function() {
     console.log('connected..... ')
 })






 // app.js

 // Define the welcome message
 const welcomeMessage = "Welcome to the dress store";

 // Print the welcome message to the console
 console.log(welcomeMessage);