//Create a Person constructor that accepts name and age as parameters and sets those properties 
//accordingly in the Constructor.

var PersonConstructor = function(name, age) {
	this.name = name; 
	this.age = age; 	
};


//Now create three instances of Person with data you make up

var parker = new PersonConstructor("Parker", "31");
var kristi = new PersonConstructor("Kristi", "30");
var juneBug = new PersonConstructor("JuneBug", "3");

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

PersonConstructor.prototype.sayName = function() {
	console.log(this.name);
};

kristi.sayName();
