let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topLeft")
const topRight = document.querySelector("#topRight")
const bottomLeft = document.querySelector("#bottomLeft")
const bottomRight = document.querySelector("#bottomRight")
const strictButton = document.querySelector("#strict")
const onButton = document.querySelector("#on")
const startButton = document.querySelector("#start")