let evaluate = document.getElementById("evaluate");
let result = document.getElementById("result");
let modal = document.querySelector(".modal");
let calSpace = document.querySelector(".calSpace");
let calButtons = document.querySelector(".calButtons");
let calculator = document.getElementById("calculator");
let buttons = document.querySelectorAll("button");
let history = document.querySelector(".history");
let calHis = document.getElementById("calHis");
let facebookIcon = document.getElementById("facebook-icon");
let twitterIcon = document.getElementById("twitter-icon");
let instagramIcon = document.getElementById("instagram-icon");

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
  history.style.background = "#36474f";
  for (const button of buttons) {
    button.style.color = "#f2f6f7";
  }
}

function lightMode() {
  calSpace.style.background = "#ffffff";
  calSpace.style.color = "#273238";
  calButtons.style.background = "#f3f3f3";
   history.style.background = "#3c3c3c";
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



function redirectToFacebook() {
  let facebookLink = document.createElement("a");

  facebookLink.href = "https://www.facebook.com/profile.php?id=100081341208797";

  facebookLink.target = "_blank";

  facebookLink.innerHTML =
    '<i  class="bi bi-facebook" style="color: blue"></i>';

  facebookIcon.parentNode.replaceChild(facebookLink, facebookIcon);

  window.location.href =
    "https://www.facebook.com/profile.php?id=100081341208797";
}

function Twitter() {
  let twitterLink = document.createElement("a");

  twitterLink.href =
    "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";

  twitterLink.target = "_blank";

  twitterLink.innerHTML = '<i class="bi bi-twitter" style="color: blue"></i>';

  twitterIcon.parentNode.replaceChild(twitterLink, twitterIcon);

  window.location.href =
    "https://twitter.com/centsplendor3?t=UWqbHihMR0bHyiX80xNkDg&s=09";
}

function Instagram() {
  let instagramLink = document.createElement("a");
  instagramLink.href =
    "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";

  instagramLink.target = "_blank";

  instagramLink.innerHTML =
    '<i class="bi bi-instagram" style="color: purple"></i>';

  instagramIcon.parentNode.replaceChild(instagramLink, instagramIcon);

  window.location.href =
    "https://instagram.com/splendor_chris3?igshid=NTc4MTIwNjQ2YQ==";
}
