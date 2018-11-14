//Create a variable that will store the letters
var i = 0;
var btnStart = document.getElementById("start");
//The string that will appear on the screen
var txt = "And the Raven, never flitting, still is sitting, still is sitting On the pallid bust of Pallas just above my chamber door; And his eyes have all the seeming of a demon’s that is dreaming, And the lamp-light o’er him streaming throws his shadow on the floor; And my soul from out that shadow that lies floating on the floor Shall be lifted— nevermore.";

//Stores the speed/duration of the effect in milliseconds
var speed = 100;

function typeWriter() {

//While i is less than the number of letters on the text,
//sum paper and each value of i when it loops and adds one more character
  if (i < txt.length) {
    document.getElementById("app").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
//Hides the start button when its clicked
    btnStart.style.display = 'none';
  }
}
