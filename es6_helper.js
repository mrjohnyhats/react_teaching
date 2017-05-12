// VARIABLE ASSIGNMENT

// regular es5 assignment (avoid using when possible)
var a = {};
// variable will not be changed
const a = {};
// variable only exists in the current block
let a = {};

// FUNCTIONS

// arrow function
const a = (arguments) => {/*your code*/}

// shorthand argument
const a = argument => {/*your code*/}

// shorthand return
const a = argument => /*thing to return*/

// definition of "this"
const t;
const a = () => {
	t = this;
};
if(this == t){
	console.log('abrakadabra, alakazam');
}
// prints 'abrakadabra, alakazam'

// CLASSES

// es6 classes
class myClass {
	constructor(prop){
		this.prop = prop;
	}

	otherMethod(){
		// some code
	}
}

// inheritance
class myClass extends otherClass {
	constructor(arg){
		super(arg);
	}
}

// NOTE: the 'this' variable in a class method does NOT refer to the class unless said method is the constructor.
// You can bind the 'this' variable to other class methods in the constructor

// binding 'this' to other methods

class myClass {
	constructor(){
		this.otherMethod.bind(this);
	}

	otherMethod(){
		// some code
	}
}

// OBJECT LITERALS

// putting a function in an object
const foo = () => {/*some code*/};
const myObj = {foo};

// defining function in the object
const myObj = {
	foo(){
		// some code
	}
};

// dynamic object keys
const myObj = {
	[document.getElementById('myElem').text]: 37
};

// TEMPLATE STRINGS

// basic template string
const s = `Look at me! I'm a cool template string`;

// multiline string
const s = `oo
oo
oo
oohh I can extend to
multiple lines`;

// string interpolation
const firstname = 'Donald';
const lastname = 'Duck';
const s = `Hello ${fistname} ${lastname}`;

// FUNCTION ARGUMENTS

// default arguments
const foo = (a=20) => a;
foo() // 20

// spread arguments (a is an array)
const foo = (...a) => a.length
foo('cat', 'truckdriver') // 2
