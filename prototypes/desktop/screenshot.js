var page = require('webpage').create(); page.viewportSize = { width: 2127, height: 1292 }; page.open('http://0.0.0.0:8000/#/econ/contagion/tile-grid-map?si=3&sc=1&t=light', function(status) { setTimeout(function(){ page.render('/Users/joeln/jn-gestalt/prototypes/desktop/www/screenshots/screenshot-20160923-154642.png'); console.log('completed'); phantom.exit(); },1000); });
