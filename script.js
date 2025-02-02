var c1=document.getElementById("color1");
var c2=document.getElementById("color2");
var body=document.querySelector("body");
var p=document.getElementById("copy");
// c1.addEventListener("click",changebackground);
// c2.addEventListener("click",changebackground);
function changebackground() 
{
    body.style.background="linear-gradient(to right,"+c1.value+","+c2.value+")";
    p.textContent=body.style.background;
}
