//alert('click me tO PROCEED');
 console.log("Hey i am the js code");

//----Assignment 1 as console funcctions----

var a={name:"Shravan", age:"22", city:"Pune"}
var b={name:"Shravu", age:"21", city:"Pune"}
var c={name:"Shravani", age:"20", city:"Pune"}

console.time('time taken');
console.log({a,b,c});
console.table({a,b,c});
console.timeEnd('time taken');
console.warn('This the warning');
console.error("An error occured");
console.log('%c custom message', 'color:blue');

//----Assignment 2 as var, let, const difference with code----
            /*--------Var -----------*/
var name='shravani'; //as the string declared
var age='20';        //as the number declared
var canFly='false';   //as the boolean declared
var languages=['marathi','english','hindi'];  //as the array declared

var friends={
   name:'xyz',                //as declared the object
   hobby:'reading'
}
           /*-------let----------- */
{
    let city;
    let name="vana";
    name="shravu";
    console.log('using let:', name);
}
console.log(name)

        /*--------const----------- */
        const country='india';
        console.log('country');

        const fruits=['Apple','Banana']
        console.log('fruits')
        
        fruits.push('grapes');
        console.log("fruits")


//---------------Assignment 3 as data types in javascript------------ 

Number,srring,objects are the data types available in js
name is defined with the string 
age is defined with the Number
canFly is defined with Boolean
object,let,const are also the datatypes in javascript



