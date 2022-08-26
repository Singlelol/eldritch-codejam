import { difficulties } from "./data/difficulties.js";
import { ancientsData } from './data/ancients.js';
import { brownCards, blueCards, greenCards } from './data/cards.js';

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
  let cardsAmount = new Array(...greenCards, ...blueCards, brownCards);
  function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawCard(name, number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr[i] = cardsAmount.splice(random(0, cardsAmount.length - 1), 1)
  }
  deck.push(arr)
  return deck;
}
drawCard(key, name[key]);
}
