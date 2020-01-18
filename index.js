// Import stylesheets
import './style.css';

// Write Javascridddpt code!

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


const btnPlay = document.getElementById('play');
btnPlay.onclick = function(){

  const soundFile = document.getElementById('high_a_sharp');
  soundFile.play()
  
  
  };


