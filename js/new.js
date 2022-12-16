var x=document.createElement("INPUT")
x.setAttribute("type","text")
x.setAttribute("placeholder","enter the number")
x.setAttribute("id","number")
document.body.appendChild(x);
document.write("<br>");
document.write("<br>");
  
var z=document.createElement("button")
z.setAttribute("onclick","table()")
z.innerHTML	="click"
document.body.appendChild(z);
 
function table() 
{
	var number = document.getElementById("number").value;
var i = 1;
var factorial= 1;
while(i<=number)
{
	factorial = factorial * i;
	i++;
}
document.write(factorial);
document.body.style.backgroundColor="lightgreen";
}

