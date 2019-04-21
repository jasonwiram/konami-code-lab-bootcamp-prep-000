const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  document.body.addEventListener("keydown", onKeyDownHandler);
    
    function onKeyDownHandler(e) {
      const key = e.key;
      console.log(e);
      
      if (key === codes[index]) {
        index++;
        
        if (index === codes.length - 1) {
          alert ("Contra!");
          
          index = 0;
          }
        }
        
        else {
          index = 0;
        }
      }
  }

init();
