const container = document.querySelector(".container");
const predict_btn = document.getElementById("Predictions");
const repredict_btn = document.getElementById("Reprendre"); // Ensure this button exists in your HTML
const load = document.querySelector('.loading')

<<<<<<< HEAD
// PREDICTION COUNTER
let count = 0;

// PREDICTION BUTTON EVENT
predict_btn.addEventListener("click", () => {
  if (count >= 6) {
    alert("⚠️ You have reached the maximum prediction limit (7). Click 'Repredre' to restart.");
    predict_btn.disabled = true; // Disable Prediction button
    repredict_btn.disabled = false; // Enable Repredre button
    return;
  } else {
    count += 1;
    const existing_boards = document.querySelectorAll(".game_board");

    if (existing_boards.length === 0) {
      console.error("No game board found!");
      return;
    }

    const firstBoard = container.firstElementChild;
    const circles = firstBoard.querySelectorAll(".circles");
=======
// PREDICTION BUTTON
let count = 0;
predict_btn.addEventListener('click',()=>{
  if(count == 6){
    return;
  }else{
    count+=1;
    const existing_boards = document.querySelectorAll(".game_board")
    
    if (existing_boards.length === 0) {
      console.error("No game board found!");
      return;
  }
    const firstBoard = container.firstElementChild
    const circles = firstBoard.querySelectorAll(".circles")
  
    if (circles.length === 0) {
      console.error("No circles found in the last game board!");
      return;
  }
    predict_btn.disabled = true; // Disable the button to prevent multiple clicks
    predict_btn.textContent = "Loading... ⏳"; // Change button text
    
    setTimeout(()=>{
      const randomIndex = Math.floor(Math.random()*circles.length)
  
    circles.forEach(circle=>{
      circle.style.backgroundImage = ''
    });
    const appleImage = 'images/apple3.jpeg'
    circles[randomIndex].style.backgroundImage = `url(${appleImage})`
     predict_btn.disabled = false
     predict_btn.textContent = 'Prediction 🍏'
  
    createNewBoard()
    },1000)
  }
 

})

 // FUNCTION TO CREATE A NEW BOARD

function createNewBoard(){
  if(count==6){
    return;
  }else{
    const newContainer = document.createElement('div')
    newContainer.className  = 'game_board';
    for(let i=0; i<5; i++){
        const newCircle = document.createElement('div')
        newCircle.className = 'circles'
        newContainer.appendChild(newCircle)
    }

    container.insertBefore(newContainer, container.firstChild)
}
}
// CLEARING FUNCTION 
>>>>>>> 88dc1fda9883c0347012dd00bd9c390e3fbf3fe4

    if (circles.length === 0) {
      console.error("No circles found in the last game board!");
      return;
    }

    predict_btn.disabled = true; // Prevent multiple clicks
    predict_btn.textContent = "Loading... ⏳"; // Update button text
    load.style.display = 'block'
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

<<<<<<< HEAD
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * circles.length);

      circles.forEach((circle) => {
        circle.style.backgroundImage = "";
      });

      const appleImage = "images/apple3.jpeg";
      circles[randomIndex].style.backgroundImage = `url(${appleImage})`;

      predict_btn.textContent = "Prediction 🍏";
      
      if (count < 7) {
        predict_btn.disabled = false;
      }
      load.style.display = 'none'
      container.style.backgroundColor = ''
      createNewBoard();
    }, 1000);
  }
  
  console.log(count)
});

// FUNCTION TO CREATE A NEW BOARD
function createNewBoard() {
  if (count >= 6) {
    return;
  } else {
    const newContainer = document.createElement("div");
    newContainer.className = "game_board";
    for (let i = 0; i < 5; i++) {
      const newCircle = document.createElement("div");
      newCircle.className = "circles";
      newContainer.appendChild(newCircle);
    }

    container.insertBefore(newContainer, container.firstChild);
  }
}

// RESET FUNCTION (Repredre)
repredict_btn.addEventListener("click", () => {
  count = 0; // Reset counter
  // predict_btn.disabled = false; // Re-enable Prediction button
  // predict_btn.textContent = "Prediction 🍏"; // Restore button text
  // repredict_btn.disabled = true; // Disable Repredre until needed again
  clearGameBoard();
  console.log(count)
});

// CLEARING FUNCTION
function clearGameBoard() {

  container.innerHTML = "";
  const newContainer = document.createElement("div");
  newContainer.className = "game_board";
  for (let i = 0; i < 5; i++) {
    const newCircle = document.createElement("div");
    newCircle.className = "circles";
    newContainer.appendChild(newCircle);
  }
  container.insertBefore(newContainer, container.firstChild);
=======
  
>>>>>>> 88dc1fda9883c0347012dd00bd9c390e3fbf3fe4
}
