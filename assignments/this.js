/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is the Global principle, when this is called and is not in a function it defaults to the window.
* 2. implicit binding is when this is refering to the objectit is called on usually to the left of the dot when the function is invoked
* 3. New binding happens when this is in the constructor object. When a new object is created using 'new' this then takes on the new object
* 4. explicit binding applies the object of this to whatever you call to the function using call() and aplly()
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(window === this);
// code example for Window Binding

// Principle 2
var me = {
    name: 'Ian',
    who: function(){
        return this.name;
    }
};
console.log(me.who());
// code example for Implicit Binding

// Principle 3
function skunk() {
    this.name =  'caty';
};
const cat = new skunk();
console.log(cat.name);
// code example for New Binding

// Principle 4
function sayName(){
    console.log(this.name + this.last);
}
var notMe = {
    name: 'johnson',
    last: 'smith',
};
sayName.call(notMe);
// code example for Explicit Binding