// Your code here
/*
const dodger = document.getElementById("dodger") // this assigns variable name to dodger element
dodger.style.backgroundColor = "#FF69B4" //this allows us to change color of dodger with JS. 
dodger.style.bottom = "100px"; //this moves dodger up the element using JS

//good code to see how the machine is taking events in console:
document.addEventListener("keydown", function (event) {
  console.log(event);
}); //can change what the event is to see different things looged in console

*/
const dodger = document.getElementById("dodger")
/*function moveDodgerLeft(){ 
    document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;
    }
  })}; */
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers,10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

/*  function moveDodgerRight() {
    document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight") {
        const rightNumbers = dodger.style.left.replace("px", "");
        const right = parseInt(rightNumbers, 10);

        dodger.style.right = `${right + 1}px`;
    }
  })} */
  moveDodgerLeft()
  moveDodgerRight()