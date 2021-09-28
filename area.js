var side1=document.querySelector("#base")
var side2=document.querySelector("#height")

var button=document.querySelector("#button")
var result=document.querySelector("#result")
function onclickhandler(){
    var a=Number(base.value);
    var b=Number(height.value);
    var area=0.5*a*b;

    result.innerText="area of the triangle "+area;
    
    

}

button.addEventListener("click",onclickhandler)