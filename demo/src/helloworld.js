var HelloWorld = function(options){
	if(typeof(options.message) === "undefined"){
		throw new TypeError("You must define the message!!");
	}
	window.alert(options.message);
};