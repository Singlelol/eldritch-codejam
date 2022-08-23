import { difficulties } from "./data/difficulties.js";
import { ancientsData } from './data/ancients.js';
import { brownCards, blueCards, greenCards } from './data/mythicCards/index.js';

console.log(ancientsData[0]);

let name = {
    greenCards: 0,
    blueCards: 0,
    brownCards:0,
    };
  
  function search(arrs, elem) {
    const colorElem = elem;
    for (let prop in arrs) {
    typeof arrs[prop] === "object" ? search(arrs[prop], colorElem) : green
    if (prop.includes(colorElem)) {
      return name[colorElem] = name[colorElem] + arrs[prop]}
    }
  return name[colorElem]
  }
  
  function countCard() {
    for (let prop in name) {
        search(ancientsData[0], prop);
      };
  }

  let deck = [];
let cardsAmount = new Array(...cardsData);

for (let key in name) {
  
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

console.log(greenCard);