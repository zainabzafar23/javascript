//couldnt figure out erroe in DOM

function performOperation(){
    let num1=parseInt(document.getElementById('input1').value);
    let num2=parseInt(document.getElementById('input2').value);

    //check if input is valid
    if(!isNaN(num1)&& !isNaN(num2)){
        let result=multiply(num1, num2);
        displayResult(result);

    }
    else{
        displayResult('please enter valid number');
    }

    function multiply(num1,num2){
        debugger;
        result= num1*num2;
        return result;
    }

    function displayResult(result){
        const resultElement=document.getElementById('result');
        resultElement=`the result is : ${result}`;
    }
}