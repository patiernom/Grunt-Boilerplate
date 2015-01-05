
module( "test.HelloWorld", {
	setup: function(){
		spyAlert = sinon.stub(window, "alert");
	},
	teardown: function(){
		spyAlert.restore();
	}
});

test('test.AlertIsCalled', sinon.test(function() {
	var helloInstance = new HelloWorld({message: "ciao ciao"});
	ok(spyAlert.called);
}));

test('test.ThrowsIfNoMessage', sinon.test(function() {
	throws(function(){
		var helloInstance = new HelloWorld();
	},
    /message/,
    "raised error message MUST contains 'message'");
}));
