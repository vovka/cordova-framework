// Loading the application file (the main file) and pass to initializer the
// name of the application main namespace. It should be the same as base path
// of the application.
define([
	'../../libs/cordova-to-browser'
	, 'application'
], function(){
	CordovaToBrowser.addEventListener('ready',
		// During initialization all requirements are being loaded. 
		Mobilecordo.Application.initialize('Mobilecordo'), false);
});
