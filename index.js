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

let btnEl1 = document.getElementById("btn-el1");
let btnEl2 = document.getElementById("btn-el2");

let btnValue = "";

function generate() {
  let btn1value = "";
  let btn2value = "";

  btnEl1.textContent = "";
  btnEl2.textContent = "";

  for (let i = 0; i < 15; i++) {
    let randomPasswordOne = Math.floor(Math.random() * characters.length);
    let randomPasswordTwo = Math.floor(Math.random() * characters.length);
    btn1value += characters[randomPasswordOne];
    btn2value += characters[randomPasswordTwo];
  }

  btnEl1.textContent = btn1value;
  btnEl2.textContent = btn2value;
}
