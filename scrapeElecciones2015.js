var oldValue = 0;

function go () {
    
	    var scrapy = require('node-scrapy')
		  , url = 'http://elecciones2015.tse.org.gt/resultados-2015/inc.detalle.php?te=1&departamento=0&municipio=0&titulo=Presidente+y+Vicepresidente+-+Nivel+Nacional+-+Nivel+Nacional%20Name#'
		  , selector = '.text-right'

		scrapy.scrape(url, selector, function(err, data) {
		    if (err) return console.error(err)

			var une = data[0].replace(',','');
			var lider = data[4].replace(',','');

			newValue = une-lider

			if( newValue != oldValue ) {

				console.log("Une   = " + data[0] + "  -  " + data[1])
				console.log("Lider = " + data[4] + "  -  " + data[5])
				console.log("FCN   = " + data[12] + "  -  " + data[13])

				oldValue = newValue;

				console.log(" ");
				console.log(newValue);

				//Load the request module
				var request = require('request');

				//Lets configure and request
				request({
				    url: 'https://slack.com/api/chat.postMessage', //URL to hit
				    qs: { 
				    	token: '<token>', 
				    	text: 'Diferencia entre Une y Lider '+(newValue)+' ('+data[41]+')',
				    	channel: '#general'
				    }, //Query string data
				    method: 'POST',
				});

			} else {
				console.log(".")
			}

		});

    setTimeout(go,30000);
}
go();