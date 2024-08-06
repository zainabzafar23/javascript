let userRole="admin";
let accessLevel;

let isLoggedIn=true;
let userMessage;

let userType="subscriber";
let userCategory;

let isAuthenticated=true;
let authenticationStatus=isAuthenticated ? "Authenticated":"not Authenticated";

//simple if else
if(userRole==="admin"){
    accessLevel="full access granted";
}
else if(userRole==="manager"){
    accessLevel="limited access granted";
}
else{
    accessLevel="no access granted";
}

//nested if else
if(isLoggedIn){
    if(userRole==="admin"){
        userMessage="welcome, admin";
    }
    else {
        userMessage="welcome user";
    }
}
else {
    userMessage="please login to access the system";
}

//switch
switch(userType){
    case "admin":
        userCategory="administrator";
        break;
    case "manager":
        userCategory="manager";
        break;
    case "subscriber":
        userCategory="subscriber";
        break;
    default:
        userCategory="unknown";

}

console.log("Access Level: ",accessLevel);
console.log("user message: ",userMessage);
console.log("user category: ",userCategory);
console.log("Authentication Status: ",authenticationStatus);