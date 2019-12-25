
var numbers = {
number1:"",
number2:"",
number3:"",
};
function displayfun1() 
  {
  	var text="";
   numbers.number1 = document.getElementById('num1').value
   numbers.number2 = document.getElementById('num2').value
   numbers.number3 = document.getElementById('num3').value
   let a=numbers.number1;
   let b=numbers.number2;
   let c=numbers.number3;
   text = Math.max(a,b,c)
   	document.getElementById("value2").innerHTML = text;
   
   

   }
function displayfun2() 
  {
  	var text="";
   numbers.number1 = document.getElementById('num1').value
   numbers.number2 = document.getElementById('num2').value
   numbers.number3 = document.getElementById('num3').value
   let a=numbers.number1;
   let b=numbers.number2;
   let c=numbers.number3;
   text = Math.min(a,b,c)
   	document.getElementById("value2").innerHTML = text;
   
 }
   console.log(numbers);