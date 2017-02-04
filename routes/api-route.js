var cheerio = require('cheerio');
var request = require('request');
require('console.table');

var car = require('./../scraper/scrape.js');

module.exports = function(app) {

  app.post("/api/new", function(req, res) {

  	
   console.log(req.body.company);
   console.log(req.body.make);
   let info =  car(req.body.company,req.body.make,function (data) {
   	console.log(data);
   	res.json(data);
   })

   // let user_info = car(req.body.company,req.body.make)

   


   function callback(info){
   	console.log(info);
   	res.json(info);

   }

   

  });


};

