var CordovaToBrowser = (function() {

	function CordovaToBrowser() {};

	CordovaToBrowser.isBrowser = function(){
		return !CordovaToBrowser.isMobileDevice();
	};

	CordovaToBrowser.isIPhone = function(){
		return navigator.userAgent.toLowerCase().match(/iphone/);
	};

	CordovaToBrowser.isAndroid = function(){
		return navigator.userAgent.toLowerCase().match(/android/);
	};

	CordovaToBrowser.isBlackberry = function(){
		//TODO:
		return false;
	};

	CordovaToBrowser.isiOS = function(){
		//TODO:
		return false;
	};

	CordovaToBrowser.isSymbian = function(){
		//TODO:
		return false;
	};

	CordovaToBrowser.isWebOS = function(){
		//TODO:
		return false;
	};

	CordovaToBrowser.isWindowsPhone = function(){
		//TODO:
		return false;
	};

	CordovaToBrowser.isBada = function(){
		//TODO:
		return false;
	};

	CordovaToBrowser.isMobileDevice = function(){
		return CordovaToBrowser.isIPhone()
			|| CordovaToBrowser.isAndroid()
			|| CordovaToBrowser.isBlackberry()
			|| CordovaToBrowser.isiOS()
			|| CordovaToBrowser.isSymbian()
			|| CordovaToBrowser.isWebOS()
			|| CordovaToBrowser.isWindowsPhone()
			|| CordovaToBrowser.isBada()
	};

	if (CordovaToBrowser.isBrowser()){
		CordovaToBrowser.events = {
			'ready' : {
				eventName: 'load',
				target: window
			},
			'load' : {
				eventName: 'load',
				target: window
			}
		};
	} else if (CordovaToBrowser.isMobileDevice()){
		CordovaToBrowser.events = {
			'ready' : {
				eventName: 'deviceready',
				target: document
			},
			'deviceready' : {
				eventName: 'deviceready',
				target: document
			}
		};
	};

	CordovaToBrowser.addEventListener = function(eventName, callback, flag){
		eventName = CordovaToBrowser.events[eventName].eventName;
		CordovaToBrowser.events[eventName].target
			.addEventListener(eventName, callback, flag)
	};

//	CordovaToBrowser.prototype.aFunction = function() {
//		return true;
//	};

	return CordovaToBrowser;

})();