const words = ["I Gusti Bagus Putra Pradwi Sekeluarga"];
let i = 0;
let j = 0;
let isDeleting = false;


function type() {
    currentWord = words[i];
    if (isDeleting) {
      document.getElementById("textwriter").textContent = currentWord.substring(0, j+1);
      j--;
      if (j == 0) {
        isDeleting = false;
        i++;
        if (i == words.length) {
          i = 0;
        }
      }
    } else {
      document.getElementById("textwriter").textContent = currentWord.substring(0, j-1);
      j++;
      if (j == currentWord.length) {
        isDeleting = true;
      }
    }
    setTimeout(type, 100);
  }
  
  type();


  function music() {
    
  }