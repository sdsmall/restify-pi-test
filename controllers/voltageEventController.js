//This Controller deals with all functionalities of VoltageEvent

function voltageEventController () {
	var VoltageEvent = require('../models/voltageEventSchema');
	
	// Creating New Voltage Event
	this.createVoltageEvent = function (req, res, next) {
		var time = req.params.time;
		var prevVoltage = req.params.prevVoltage;
		var currVoltage = req.params.currVoltage;
		var type = req.params.type;
		
		VoltageEvent.create({time:time,prevVoltage:prevVoltage,currVoltage:currVoltage,type:type}, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});	
			}
			else {
        return res.send({'result':result,'status':'successfully saved'});
      }
		});
	};

  // Fetching Details of VoltageEvent
  this.getVoltageEvent = function (req, res, next) {

    VoltageEvent.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err}); 
      }
      else {
        return res.send({'voltageEvent Details':result});
      }
    });
  };

    //get most recent VoltageEvent
  this.getLastVoltageEvent = function (req, res, next) {
  	VoltageEvent.findOne().sort({time: 1}).exec(function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err}); 
      }
      else {
      	console.log(result);
        return res.send({'Last VoltageEvent Details':result});
      }
    });
  };

return this;

};

module.exports = new voltageEventController();