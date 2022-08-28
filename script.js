import difficulties from "./data/difficulties.js";
import ancientsData from './data/ancients.js';
import { brownCards, blueCards, greenCards, cardsBlue, cardsGreen, cardsBroun } from './data/card.js';
const godCard = document.querySelectorAll('.gameland__immortal-item');
const startButton = document.querySelector('.gameland__level-start');
const backCard = document.querySelector('.gameland__playCards-deck');
const frontCard = document.querySelector('.gameland__playCards-card');
const mode = document.querySelector('.gameland__level-items');
const modeChildren = mode.querySelectorAll('.gameland__level-item');

let name = {
    greenCards: 0,
    blueCards: 0,
    brownCards:0,
    };

let ancientsIndex = 0;
  
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
  
  function countCard(num) {
    name = {
      greenCards: 0,
      blueCards: 0,
      brownCards:0,
      };
    for (let prop in name) {
        search(ancientsData[num], prop);
      };
  return ancientsIndex = num;
  }

  godCard.forEach((el, index) => {
    el.addEventListener('click', ()=> {
      console.log(index);
      countCard(index);
      for (const [key, value] of Object.entries(name)) {
        console.log(`${key}: ${value}`);
      }
    })
  })

let deck;

function startGame(num) {
  deck = [];
  console.log(num)
  for (let key in name) {
    let cardsAmount = [...greenCards, ...blueCards, ...brownCards].filter(element => element.color === key.slice(0, -5));
    console.log(cardsAmount)
    if (num === 1) {
      cardsAmount = cardsAmount.filter(element => element.difficulty !== 'hard')
      console.log(cardsAmount)
    } else if (num === 3) {
      cardsAmount = cardsAmount.filter(element => element.difficulty !== 'easy')
      console.log(cardsAmount)
    } else if (num === 0) {
      let result = cardsAmount.filter(element => element.difficulty === 'easy')
      if(result.length < name.key) {
          let coun = cardsAmount.filter(element => element.difficulty === 'normal')
          result.concat(coun.slice(0, name.key - result.length))
        }
        cardsAmount = result;
      } else if (num === 4) {
        let result = cardsAmount.filter(element => element.difficulty === 'hard')
        if(result.length < name.key) {
            let coun = cardsAmount.filter(element => element.difficulty === 'normal')
            result.concat(coun.slice(0, name.key - result.length))
          }
          cardsAmount = result;
        }
    console.log(cardsAmount)
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
  return deck;
}


startButton.addEventListener('click', () => {
startButton.classList.add('none');
mode.classList.remove('none');
modeChildren.forEach((el, index) => {
  el.textContent = difficulties[index].name;
}
)
})

modeChildren.forEach((el, index) => {
  el.addEventListener('click', () => {
    let firstStage = [ancientsData[ancientsIndex].firstStage.greenCards, ancientsData[ancientsIndex].firstStage.blueCards, ancientsData[ancientsIndex].firstStage.brownCards]
    let secondStage = [ancientsData[ancientsIndex].secondStage.greenCards, ancientsData[ancientsIndex].secondStage.blueCards, ancientsData[ancientsIndex].secondStage.brownCards]
    let thirdStage = [ancientsData[ancientsIndex].thirdStage.greenCards, ancientsData[ancientsIndex].thirdStage.blueCards, ancientsData[ancientsIndex].thirdStage.brownCards]
    
    let firstStageCard = [];
    let secondStageCard = [];
    let thirdStageCard = [];
      startGame(index);
      sortCard(firstStage, firstStageCard);
      sortCard(secondStage, secondStageCard);
      sortCard(thirdStage, thirdStageCard);
      rollCard = [firstStageCard, secondStageCard, thirdStageCard];
      console.log(firstStage)
      console.log(secondStage)
      console.log(thirdStage)
      console.log(firstStageCard)
      console.log(secondStageCard)
      console.log(thirdStageCard)
      console.log(deck)
    })
}
)
let rollCard;

function sortCard(arr, result) {
  if (result.length) {
    return result;
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(deck[i].slice(0, arr[i]));
    deck[i].splice(0, arr[i])
  }
return result;
}

function pullCard() {
  console.log(rollCard.length)
  if (!rollCard.length || rollCard.length === 0) {
    return;
  }
  function random(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}
let index = random(0, rollCard[0].length - 1);
console.log(rollCard[0][index].length)
  console.log(rollCard[0].length)
if (rollCard[0][index].length > 0) {
  let result = rollCard[0][index].shift()
  if (!rollCard[0][index].length || rollCard[0][index].length === 0) {
    rollCard[0].splice([index], 1)
  }
  if (!rollCard[0].length || rollCard[0].length === 0) {
    rollCard.shift()
  }
  console.log(result)
  console.log(result[0].cardFace)
  return result[0].cardFace;
} else {
  rollCard[0].splice([index], 1)
  pullCard()
}
}

backCard.addEventListener('click', ()=>{
  frontCard.style.backgroundImage = `url(${pullCard()})`;
})
