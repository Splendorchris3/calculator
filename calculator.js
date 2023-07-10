let evaluate = document.getElementById("evaluate");
let result = document.getElementById("result");
let modal = document.querySelector(".modal");
let calSpace = document.querySelector(".calSpace");
let calButtons = document.querySelector(".calButtons");
let calculator = document.getElementById("calculator");
let buttons = document.querySelectorAll("button");
let history = document.querySelector(".history");
let calHis = document.getElementById("calHis");

function display(value) {
  if (evaluate.innerText[0] === "0") {
    evaluate.innerText = "";
  }
  evaluate.innerText += value;
}

function returnToZero() {
  evaluate.innerText = "0";
  result.innerText = "";
}

function del() {
  let str = evaluate.innerText.split("");
  str.pop();
  evaluate.innerText = str.join("");
}

function displayResult() {
  let eva = evaluate.innerText;
  let res = eval(eva);
  result.innerText = res;
  let historyDiv = document.createElement("div");
  let calHistory = document.createElement("h2");
  let resultHistory = document.createElement("h2");
  historyDiv.appendChild(calHistory);
  historyDiv.appendChild(resultHistory);
  calHis.appendChild(historyDiv);
  calHistory.innerText = eva;
  resultHistory.innerText = res;
}

function displayModal() {
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

function darkMode() {
  calSpace.style.background = "#36474f";
  calSpace.style.color = "#f2f6f7";
  calButtons.style.background = "#18212a";
  for (const button of buttons) {
    button.style.color = "#f2f6f7";
  }
}

function lightMode() {
  calSpace.style.background = "#ffffff";
  calSpace.style.color = "#273238";
  calButtons.style.background = "#f3f3f3";
  for (const button of buttons) {
    button.style.color = "#3c3c3c";
  }
}

function displayHistory() {
  history.style.height = "90vh";
}

function closeHistory() {
  history.style.height = "0vh";
}

function clearHistory() {
  calHis.innerHTML = "";
}
