CordovaFramework.Application.Requirements = {
	load: function(applicationObject, callback){
		this.arguments = {
			applicationObject: applicationObject,
			callback: callback
		}
		requirejs([
			applicationObject.basePath + '/libs/requirements'
		], this.afterRequirementsLoaded);
	},

	afterRequirementsLoaded: function(){
		return (function(){
			var
				  module, self = this, i
				// These are the functions names that this module contains.
				, base = ['load', 'afterRequirementsLoaded', 'arguments']
				, toRequire = []
				, file
			;
			// Collect all the application requirements
			for (module in this){
				if (this.hasOwnProperty(module) && -1 == base.indexOf(module)){
					for (i in this[module]){
						file = this[module][i];
						toRequire.push(this.arguments.applicationObject.basePath
							+ '/' + module.toLowerCase()
							+ '/' + file);
					}
				}
			}
			// Require them all
			requirejs(toRequire, function(){
				(function(callback){
					callback.apply(this);
				}).apply(self.arguments.applicationObject, [self.arguments.callback])
			});
		}).apply(CordovaFramework.Application.Requirements);
	}
};