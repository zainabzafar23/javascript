let user="subscriber";
let authorizationMsg;

switch(user){
    case "employee":
    authorizationMsg="you have access to dietary services";
    break;

    case "enrolled member":
        authorizationMsg="you are authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
        break;

    case "subscriber":
        authorizationMsg="you are authorized to have partial access to facilitate Dietary Services only.";
        break;
    
    case "non-subscriber":
        authorizationMsg="you need to enroll or subscribe to avail facility";
        break;

    default:
        authorizationMsg="hello please subscribe or enroll ";
}

console.log("hi",user,"!", authorizationMsg);

