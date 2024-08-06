// global scope
var globalVar="im a global variable";
let globalLet= "im also global but scoped with let ";
const globalConst="im a global constant";

{
    //block scope
    var blockVar="im a block scopr var";
    let blockLet="im a block scoped let";
    const blockConst="im a block scoped const";
}

// global scope
console.log(globalVar); 
console.log(globalLet);
console.log(globalConst);

// block scope
console.log(blockVar);
console.log(blockLet);

// fucntion
function show()
{
    var functionVar="im a block scoped var";
    let functionLet="ima block scope let";
    const functionConst="ima block scoped const";
}

show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

// inside block variables
{
    let a=10;
    const b=20;
    var c=30;

    a=15;
    c=35;

    console.log("inside block");
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
}

//try to reassign varibales outside block
console.log("outside block");
console.log("attempting to reassign a and b outside block");

a=40;
b=50;
c=60;

    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);