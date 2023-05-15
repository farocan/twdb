//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function() {
	return `OMG!!!! ${this.toUpperCase()}!!!!!!! AGHAGHGHGH!`;
};

//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function(){
	return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
}
