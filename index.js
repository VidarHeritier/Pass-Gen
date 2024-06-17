const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordEl1 = document.getElementById("copyPass1");
let passwordEl2 = document.getElementById("copyPass2");
let password1 = "";
let password2 = "";

document.getElementById("generate").addEventListener("click", generatePass1);
document
  .getElementById("copyPass1")
  .addEventListener("click", () => copyToClipboard(password1, "message"));
document
  .getElementById("copyPass2")
  .addEventListener("click", () => copyToClipboard(password2, "message"));

function generatePass1() {
  password1 = "";
  let randomNumber = "";
  passwordEl1.disabled = true;
  passwordEl2.disabled = true;
  for (let i = 0; i < 15; i++) {
    randomNumber = Math.floor(Math.random() * characters.length);
    password1 += characters[randomNumber];
  }
  password2 = "";
  let randomNumber2 = "";
  for (let i = 0; i < 15; i++) {
    randomNumber2 = Math.floor(Math.random() * characters.length);
    password2 += characters[randomNumber2];
  }
  myFunction();
}

function myFunction() {
  setTimeout(() => {
    passwordEl1.textContent = password1;
    passwordEl2.textContent = password2;
    passwordEl1.disabled = false;
    passwordEl2.disabled = false;
    passwordEl1.classList.add("newPass1");
    passwordEl2.classList.add("newPass2");
  }, 800);
}

function copyToClipboard(text, message) {
  if (text === "") return;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      let messageEl = document.getElementById(message);
      messageEl.style.display = "block";
      setTimeout(() => {
        messageEl.style.display = "none";
      }, 1500);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

function playAnim() {
  const matrixVid = document.querySelector(".matrix");
  matrixVid.play();
  setTimeout(() => {
    pauseVid();
  }, 800);
}

function pauseVid() {
  const matrixVid = document.querySelector(".matrix");
  matrixVid.pause();
}
