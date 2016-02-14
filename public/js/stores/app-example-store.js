var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var ObjectAssign = require('object-assign');

var CHANGE_EVENT = "change";

var _example = {
	"company" : "Company1",
	"designation" : "Abc1"
};

var ExampleStore  = ObjectAssign({},EventEmitter.prototype,{
    addChangeListener:function(cb){
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener:function(cb){
        this.removeListener(CHANGE_EVENT, cb);
    },
    getExample : function (){
    	return _example;
    }
});


AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case AppConstants.EXAMPLE_ACTION:
            _example.company = action.response[0];
            _example.designation = action.response[1];
            ExampleStore.emit(CHANGE_EVENT);
            break;
        default:
            return true;

    }
});

module.exports = ExampleStore;