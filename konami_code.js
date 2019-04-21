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
    const key = parseInt(e.detail || e.which)
    console.log('key', key)
    if (key === code[index]) {
      index++

       if (index === code.length) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }
  }

init();
