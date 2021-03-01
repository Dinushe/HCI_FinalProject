
// Get the modal
var modal = document.getElementById("myModal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var btn9 = document.getElementById("myBtn9");
var btn10 = document.getElementById("myBtn10");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
btn5.onclick = function() {
  modal.style.display = "block";
}
btn6.onclick = function() {
  modal.style.display = "block";
}
btn7.onclick = function() {
  modal.style.display = "block";
}
btn8.onclick = function() {
  modal.style.display = "block";
}
btn9.onclick = function() {
  modal.style.display = "block";
}
btn10.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





//hide navbar


let navbar = document.getElementById('navbar');
var scrollPrev = window.pageYOffset;
function scrollFun1() {
  var scrollCur = window.pageYOffset;
  if(scrollPrev > scrollCur){
    navbar.style.top = "0";
  }else{
     navbar.style.top = "-90px";

  }
 scrollPrev = scrollCur;
}


// When the user scrolls down 50px from the top of the document, resize the header logo size


function scrollFun2() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 && document.body.offsetWidth > 620) {
document.getElementById('logo').style.width= "100px";
} else {
document.getElementById('logo').style.width = "100px";
}
}

window.onscroll = function() {scrollFun1(), scrollFun2()};


