const container = document.querySelector(".container")
const predict_btn = document.getElementById('Predictions')

// PREDICTION BUTTON

predict_btn.addEventListener('click',()=>{
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

})

 // FUNCTION TO CREATE A NEW BOARD

function createNewBoard(){
    const newContainer = document.createElement('div')
    newContainer.className  = 'game_board';
    for(let i=0; i<5; i++){
        const newCircle = document.createElement('div')
        newCircle.className = 'circles'
        newContainer.appendChild(newCircle)
    }

    container.insertBefore(newContainer, container.firstChild)
}
// CLEARING FUNCTION 

function clearGameBoard(){
    container.innerHTML = ''
    const newContainer = document.createElement('div')
    newContainer.className  = 'game_board';
    for(let i=0; i<5; i++){
        const newCircle = document.createElement('div')
        newCircle.className = 'circles'
        newContainer.appendChild(newCircle)
    }

    container.insertBefore(newContainer, container.firstChild)

}