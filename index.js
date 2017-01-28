var cheerio = require('cheerio');
var request = require('request');
require('console.table');

request({
    method: 'GET',
    url: 'http://www.mywipersize.com/make/chevrolet/malibu.php'
}, function(err, response, body) {
    if (err) return console.error(err);

    // Tell Cherrio to load the HTML
    $ = cheerio.load(body);
    
   var test = $(".views-table").text();

   var array = test.split(" ");

   //console.log(array);

   array = array.filter(function(entry) { return entry.trim() != ''; });

   var test_array = [];

	for (let i = 6; i < array.length; i = i + 3) {

		let new_array = [];

		new_array.push(array[i],array[i+1],array[i+2]);

		test_array.push(new_array);

	}

	var cars = test_array.map(function (item) {
	    return {
	        year: parseInt(item[0], 10),
	        driver_side: item[1],
	        pass_side: item[2]
	    };
	});

	console.log(cars);

  //console.log(array);


  console.table(cars);

});