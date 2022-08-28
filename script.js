import { difficulties } from "./data/difficulties.js";
import { ancientsData } from './data/ancients.js';
import { brownCards, blueCards, greenCards, cardsBlue, cardsGreen, cardsBroun } from './data/cards.js';

let name = {
    greenCards: 0,
    blueCards: 0,
    brownCards:0,
    };
  
  function search(arrs, elem) {
    const colorElem = elem;
    for (let prop in arrs) {
    if (typeof arrs[prop] === "object") {
      search(arrs[prop], colorElem)
    } else if (prop.includes(colorElem)) {
      return name[colorElem] = name[colorElem] + arrs[prop]}
    }
  return name[colorElem]
  }
  
  function countCard() {
    for (let prop in name) {
        search(ancientsData[0], prop);
      };
  }

//countCard();

let deck = [];

for (let key in name) { 
  let cardsAmount = [...greenCards, ...blueCards, ...brownCards].filter(element => element.color === key.slice(0, -5));
  function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawCard(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr[i] = cardsAmount.splice(random(0, cardsAmount.length - 1), 1)
  }
  deck.push(arr)
  return deck;
}
drawCard(name[key]);
}

let firstStage = [ancientsData[0].firstStage.greenCards, ancientsData[0].firstStage.blueCards, ancientsData[0].firstStage.brownCards]
let secondStage = [ancientsData[0].secondStage.greenCards, ancientsData[0].secondStage.blueCards, ancientsData[0].secondStage.brownCards]
let thirdStage = [ancientsData[0].thirdStage.greenCards, ancientsData[0].thirdStage.blueCards, ancientsData[0].thirdStage.brownCards]

let firstStageCard = [];
let secondStageCard = [];
let thirdStageCard = [];

function sortCard(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    result.push(deck[i].slice(0, arr[i]));
    deck[i].splice(0, arr[i])
  }
return result;
}

let rollCard = [firstStageCard, secondStageCard, thirdStageCard]

sortCard(firstStage, firstStageCard);
sortCard(secondStage, secondStageCard);
sortCard(thirdStage, thirdStageCard);

function pullCard() {
  function random(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
rollCard = [firstStageCard, []];
let index = random(0, rollCard[0].length - 1);
if (rollCard[0].length === 0) {
  rollCard.shift()
}
if (rollCard[0][index].length === 0) {
  rollCard[0].splice([index], 1)
}
if (rollCard.length === 0) {
  return;
}
console.log(rollCard[0][index].shift())
}
pullCard()