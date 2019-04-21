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
  document.body.addEventListener("keydown", function(e) {
      const key = e.key;
      
      if (key === codes[index]) {
        index++;
        alert('key loop')
        
        if (index === codes.length) {
          alert ("Contra!");
          
          index = 0;
          }
        } else {
          index = 0;
      }
    }
  );
}

init();
