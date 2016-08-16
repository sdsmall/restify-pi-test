module.exports = function(app) {
	var voltageEvent = require('./controllers/voltageEventController');

	app.get('/', function(req, res, next) {
		return res.send("WELCOME TO REST API");
	});

	app.post('/createVoltageEvent', voltageEvent.createVoltageEvent);
	app.get('/getVoltageEvent', voltageEvent.getVoltageEvent);
	app.get('/getLastVoltageEvent', voltageEvent.getLastVoltageEvent);
 
};