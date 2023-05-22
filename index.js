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

let passwordEl1 = document.getElementById("pass1");
let passwordEl2 = document.getElementById("pass2");
let password1 = "";
let password2 = "";

document.getElementById("generate").addEventListener("click", generatePass1);

function generatePass1() {
  password1 = "";
  let randomNumber = "";
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
  passwordEl1.textContent = password1;
  passwordEl2.textContent = password2;
}
