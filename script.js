 let selectedSound = 'dog';

 document.addEventListener('keydown', (event) => {
   switch (event.keyCode) {
     case 1: selectedSound = 'dog'
     break;
    case 2: selectedSound = 'cat';
    break;
    case 3: selectedSound = 'chicken';
    break;
    case 4: selectedSound = 'geese'; 
    break;
    case 5: selectedSound = 'goat';
    break;
    case 6: selectedSound = 'horse';
    break;
    case 7: selectedSound = 'lamb';
    break;
    case 8: selectedSound = 'pig';
    break;
    case 9: selectedSound = 'roster';
break;
}
   
   
     selectedSound.currentTime = 0;
     if (selectedSound == 'dog') {
       document.getElementById('dog').play();
     } else if (selectedSound == 'cat') {
       document.getElementById('cat').play();
     } else if (selectedSound == 'chicken') {
       document.getElementById('chicken').play();
     } else if (selectedSound == 'geese') {
       document.getElementById('geese').play();
     } else if (selectedSound == 'goat') {
       document.getElementById('goat').play();
     } else if (selectedSound == 'horse') {
       document.getElementById('horse').play();
     } else if (selectedSound == 'lamb') {
       document.getElementById('lamb').play();
     } else if (selectedSound == 'pig') {
       document.getElementById('pig').play();
     } else if (selectedSound == 'roster') {
       document.getElementById('roster').play();
     }
   }
 });