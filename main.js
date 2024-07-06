//clock
//variables
const hourhand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

//functioning

 function setTime() {
  // const currentDate = new Date();
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio+currentDate.getHours()) / 12; 

   wareegSamee(secondHand, secondRatio)
   wareegSamee(minuteHand, minuteRatio)
   wareegSamee(hourhand, hourRatio)
 }

 function wareegSamee(element, rotaionRatio) {
  element.style.setProperty('--wareeg', rotaionRatio * 360);
 }
 setTime();
 setInterval(setTime,1000); 


 //buttons
 const btnone = document.getElementById("button1");
 const btntwo = document.getElementById("button2");
 const btthree = document.getElementById("button3");
 const btnfour = document.getElementById("button4");
 const clock = document.querySelector(".clock");
 const button = document.querySelectorAll('.button');

 const buttonsAray = Array.from(button);
const colors = ['#f7bc56','#f56868','#edf0f2','#ffe100'];


//Evenet listener
buttonsAray[0].addEventListener('click',changeToOrange);
buttonsAray[1].addEventListener('click',changeToRed);
buttonsAray[2].addEventListener('click',changeToGrey);
buttonsAray[3].addEventListener('click',changeToYellow);


function changeToOrange (){
  clock.style.background = colors[0];
}
function changeToRed (){
  clock.style.background = colors[1];
}
function changeToGrey (){
  clock.style.background = colors[2];
}
function changeToYellow (){
  clock.style.background = colors[3];
}