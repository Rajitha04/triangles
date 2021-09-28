var side1=document.querySelector("#side1")
var side2=document.querySelector("#side2")

var button=document.querySelector("#button")
var result=document.querySelector("#result")
function onclickhandler(){
    var a=Number(side1.value);
    var b=Number(side2.value);
    var square=a*a+b*b;
    var root=Math.sqrt(square);

    result.innerText="the hyptenuse length is "+root;
    
    

}

button.addEventListener("click",onclickhandler)