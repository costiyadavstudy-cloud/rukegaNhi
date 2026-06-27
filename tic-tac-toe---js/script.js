let box = document.getElementsByClassName("box");
let winner = document.getElementsByClassName("result");
let boxArray = [];
let winningCheck = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < 9; i++) {
  let boxes = document.createElement("div");
  boxes.classList.add("boxes");
  box[0].appendChild(boxes);

  boxArray.push(boxes);
}

let chanceCounter = 0;
for (let i = 0; i < boxArray.length; i++) {
  const e = boxArray[i];
  e.addEventListener("click", () => {
    if (e.innerHTML === "") {
      if (chanceCounter % 2 === 0) {
        e.innerHTML = "X";
        e.style.color = "red";
        chanceCounter++;
      } else {
        e.innerHTML = "O";
        e.style.color = "blue";
        chanceCounter++;
      }
      for (let j = 0; j < winningCheck.length; j++) {
            if (boxArray[winningCheck[j][0]].innerHTML === boxArray[winningCheck[j][1]].innerHTML && boxArray[winningCheck[j][1]].innerHTML  === boxArray[winningCheck[j][2]].innerHTML &&boxArray[winningCheck[j][0]].innerHTML !== '') {
              winner[0].innerHTML = `winner is : ${boxArray[winningCheck[j][0]].innerHTML}`
            }
          }
        }
  });
}
