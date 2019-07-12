let express = require('express');
var app = express();
const PORT = 3000;  
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
 //create database
  connection.query("CREATE DATABASE world3", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
//create table world
    var tableCountry = "CREATE TABLE IF NOT EXISTS country (\
        name TEXT NOT NULL, \
        Continent TEXT, \
        Region TEXT, \
        SurfaceArea INT, \
        IndepYear YEAR, \
        Population INT, \
        LifeExpectancy DECIMAL(2,2), \
        GNP INT, \
        GNPOld INT, \
        LocalName TEXT, \
        GovernmentForm TEXT, \
        HeadOfState TEXT, \
        Capital TEXT,);";
    connection.query(tableCountry, function (err, result) {
        if (err) throw err;
    console.log("Table Country is created");
    });
//create table city
    var tableCity = "CREATE TABLE IF NOT EXISTS City (\
        Id INT AUTO INCREMENT, \
        Name TEXT, \
        CountryCode INT NOT NULL, \
        District TEXT, \
        Population INT, \);";
    connection.query(tableCity, function (err, result) {
        if (err) throw err;
    console.log("Table City is created");
    });

});


app.listen(PORT);