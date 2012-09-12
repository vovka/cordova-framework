// Defining the appplication main module.
var Mobilecordo = {};

// Loading the framework. During 'start-point' loading all framework
// dependencies files are loading.
define(['../../cordova-framework/start-point'], function(){
	// Defining the Application module inside the main application one.
	Mobilecordo.Application = CordovaFramework.Application.extend({
		// Here configuring the application.
		test: function(){
			ApplicationUtilities.helloFromTheApp();
		}
	})
});
