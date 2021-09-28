var quiz=document.querySelector(".quiz")
var button=document.querySelector("#button")
var output=document.querySelector("#result")
const answers=["90","right angle","45","45"]

function clickhandler(){
   var score=0;
   var index=0;
   const formResults=new FormData(quiz);
   for(let value of formResults.values()){
       if(value===answers[index]){
           score=score+1;
       }
       index=index+1;
   }
   output.innerText="your score is"+score;

}


button.addEventListener("click",clickhandler)