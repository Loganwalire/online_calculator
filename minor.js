let Answer =document.getElementById("answer");//grabing the element containing id answer and storing it in variable
function display(num){  //creating function to display the value when we press a button
    Answer.value += num;
}
function calculate(){// creating a function which will help us in calculating basic arithmetic operations using try & catch
try{
    Answer.value = eval(Answer.value);
}
catch(err){
    alert(invalid);
}
}
function allclear(){// function for the ac button to clear whole screen
    Answer.value ="";
}
function del(){//function for deleting the last entered value
    Answer.value = Answer.value.slice(0,-1);
}
function square(num){// function for squaring of a number
    Answer.value = Answer.value**2;
}
// created a event listener for hover function for formheading
var item = document.getElementById("formheading");
item.addEventListener("mouseover", mouseOver);
function mouseOver(){
    item.style.color = "red";
}
item.addEventListener("mouseout", mouseOut);
function mouseOut(){
    item.style.color = "black";
}