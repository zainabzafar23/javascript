let testtext="the quick brown fox jumps over the lazy dog";
let starttime, endtime;

function starttest(){
    //set test text
    document.getElementById("text").value=testtext;

   //reset user input field
   document.getElementById("userinput").value=" ";
   document.getElementById("userinput").readonly=false;
   
   
   //reset result and timer
    document.getElementById("output").innerHTML=" ";

    starttime=new Date().getTime();

    //change button text and functionality
    var button=document.getElementById("btn");
    button.innerHTML="end test";
    button.onclick=endtest;

}


function endtest(){
    endtime=new Date().getTime();

    //disbale user input
    document.getElementById("userinput").readonly=true;

    //calculate time
    var timeElapsed=(endtime-starttime)/1000;  //in seconds
    var userTypedText=document.getElementById("userinput").value;

   //split the text to count word correecly
    var typedWords=userTypedText.split(/\s+/).filter(function(word){
        return word !=="";
    }).length;

    var wpm=0;
    if(timeElapsed!==0 && !isNaN(typedWords)){
        wpm=Math.round((typedWords/timeElapsed)*60);
    }

    //display result
    var outputDiv=document.getElementById("output");
    outputDiv.innerHTML="<h2>typing test results: </h2>"+"<p>words typed: "+typedWords+ "</p>"+ "<p> time elapsed: "+timeElapsed.toFixed(2)+"seconds </p>"+"<p> words per minute wpm: "+wpm+"</p>";

    //reset button
    var button=document.getElementById("btn")
    button.innerHTML="lets go again!!";
    button.onclick=starttest;
   


}

