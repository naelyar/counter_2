const contan =document.querySelector('.counter');
const contani =document.querySelector('.counter h1');
const contans =document.querySelector('.counter button');



let button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;


};

