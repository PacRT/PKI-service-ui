
var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var APIConstants = require('../constants/app-api-url.js');
var AppConstants = require('../constants/app-constants.js');

var ExampleAction = {
	updateMyDetails : function(companyName,designation){
		AppDispatcher.handleViewAction({
            actionType : AppConstants.EXAMPLE_ACTION,
            response :[companyName,designation]
        });
	}

}

module.exports = ExampleAction;