const spanIDs = ["1", "2", "3", "4", "5"];
let scoreChose = " 0 "; // Stores the user's choice

// Changes the span's background to orange on mouseover
function orangeBgn(event) {
  let elementHovered = event.target;
  if (elementHovered.id != "rating" && elementHovered.style.backgroundColor != "lightgray") {
    elementHovered.style.backgroundColor = "hsl(25, 97%, 53%)";
    elementHovered.style.color = "hsl(0, 0%, 100%)";
  }
}

// Changes the span's background dark-grey on mouseout
function whiteBgn(event) {
  let elementHovered = event.target;
  if (elementHovered.id != "rating" && elementHovered.style.backgroundColor != "lightgray") {
    elementHovered.style.backgroundColor = "hsla(217, 12%, 54%, 10%)";
    elementHovered.style.color = "hsl(217, 12%, 63%)";
  }
}

// Changes the span's background to light-gray on click and stores the user's choice
function grayBgn(event) {
  if (event.target.id != "rating") {
    for(let i = 0; i <= 4; i++) {
      document.getElementById(spanIDs[i]).style.backgroundColor = "hsla(217, 12%, 54%, 10%)";
      document.getElementById(spanIDs[i]).style.color = "hsl(217, 12%, 63%)";
    }
    let spanClicked = event.target;
    scoreChose = parseInt(spanClicked.id);
    spanClicked.style.backgroundColor = "lightgray";
    spanClicked.style.color = "white";
  }
}

// Display the window with the score and thank you message
function displayScore() {
  const scoreWindow = document.getElementById("thank_you-cont");
  const scoreChoiceWindow = document.getElementById("rating-cont");
  const spanWithScore = document.getElementById("scored"); 
  scoreChoiceWindow.style.display = "none";
  scoreWindow.style.display = "block";
  spanWithScore.innerHTML = ` ${scoreChose} `;
}
