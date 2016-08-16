// Model for the VoltageEvent
module.exports = (function voltageEventSchema () {

	var mongoose = require('../db').mongoose;

	var schema = {
		time: {type: Number, default: (new Date()).getTime()},
		prevVoltage: {type: Number, required: true},
		currVoltage: {type: Number, required: true},
		type: {type: String, required: true}
	};
	var collectionName = 'event';
	var voltageEventSchema = mongoose.Schema(schema);
	var VoltageEvent = mongoose.model(collectionName, voltageEventSchema);
	
	return VoltageEvent;
})();