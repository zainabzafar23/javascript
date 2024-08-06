//global scope
var globalVar="im a global variable";
let globalLet= "im also global but scoped with let ";
const globalConst="im a global constant";

{
    //block scope
    var blockVar="im a block scopr var";
    let blockLet="im a block scoped let";
    const blockConst="im a block scoped const";
}

//global scope
console.log(globalVar); 
console.log(globalLet);
console.log(globalConst);

//block scope
//console.log(blockVar);
//console.log(blockLet);

//fucntion
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
