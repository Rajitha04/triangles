var angle1=document.querySelector("#angle1")
var angle2=document.querySelector("#angle2")
var angle3=document.querySelector("#angle3")
var button=document.querySelector("#button")
var result=document.querySelector("#result")
function onclickhandler(){
    var a=Number(angle1.value);
    var b=Number(angle2.value);
    var c=Number(angle3.value);
    
    var sum=a+b+c;
    if(sum===180){
        result.innerText="yayy! it forms a triangle"
    }
    else{
        result.innerText="Oops!it doesn't form a triangle"
    }
    
}

button.addEventListener("click",onclickhandler)

