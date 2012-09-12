var CordovaFramework = {
	Application: {}
};

define([
	'vendors/cordova-2.0.0'
	, './requirements'
], function(){
	var Application = {
		initialize: function(applicationMainNamespace){
			var applicationObject = window[applicationMainNamespace];
			applicationObject.mainNamespaceName = applicationMainNamespace;
			applicationObject.basePath = applicationMainNamespace.toLowerCase();

			applicationObject.Application.Requirements.load(applicationObject
				// The second parameter will be executed in the
				// <applicationObject> context.
				, function(){
					// Do something within the context of the applicationObject -
					// the main application namespace. Do it just for test to
					// show that access to application is present. Not sure if
					// it will be needed in the production mode.
					this.Application.test();
				}
			);
		},

		extend: function(object, source){
			source || (source = this);
			for (var property in source){
				if (source.hasOwnProperty(property)){
					object[property] = source[property];
				}
			}
			return object;
		}
	};
	Application.extend(CordovaFramework.Application, Application);
});
