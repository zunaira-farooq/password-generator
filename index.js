const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPW = document.getElementById("first-PW")
let secondPW = document.getElementById("second-PW")
document.getElementById("btn").addEventListener("click", generatePW)

function generatePW() {
    firstPW.textContent = ""
    secondPW.textContent = ""
    for(let i=0; i<15; i++) {
        firstPW.textContent += characters[Math.floor(Math.random()*characters.length)]
        secondPW.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
    
}

function firstCopy() {
  // Get the text field
  var button = document.getElementById("first-PW");
  var copyText = button.textContent;

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);

  // Alert the copied text
  alert("Copied the text: " + copyText);
}

function secondCopy() {
  
  var button = document.getElementById("second-PW");
  var copyText = button.textContent;

  navigator.clipboard.writeText(copyText);

  alert("Copied the text: " + copyText);
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


