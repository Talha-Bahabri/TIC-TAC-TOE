const slot = (() => { 
  const slot0 = document.getElementById('0-slot');
  const slot1 = document.getElementById('1-slot');
  const slot2 = document.getElementById('2-slot');
  const slot3 = document.getElementById('3-slot');
  const slot4 = document.getElementById('4-slot');
  const slot5 = document.getElementById('5-slot');
  const slot6 = document.getElementById('6-slot');
  const slot7 = document.getElementById('7-slot');
  const slot8 = document.getElementById('8-slot');
  return {  
    slot0, 
    slot1, slot2,
    slot3, slot4,
    slot5, slot6,
    slot7, slot8
  };
})();


let slotsArray = [slot.slot0, slot.slot1, slot.slot2, slot.slot3, slot.slot4, slot.slot5, slot.slot6, slot.slot7, slot.slot8]


//this one is the class
const player = (name, mark) => {
    const sayHello = () => console.log(`Hello i'm the ${name} and my mark is ${mark}`);
    return { name, mark, sayHello  };
  };
  //those are the objects, players
  const player1 = player('Human', `X`);
  const player2 = player(`bot`, `O`); 
  player1.sayHello();  
  player2.sayHello(); 


  const gameBoard = (() => {
      const sayPlayersName = (player1 , player2) => console.log(` player1 is ${player1.name} and player2 is ${player2.name} hehe`)
     //this loop is all the event listener ( instead of making 8 , make 1 loop)
        if (winCondition() === `No winner yet`) {
          
      for (let i = 0 ; i<=8 ; i++) {  
        slotsArray[i].addEventListener("click" , function(e) {
          console.log(winCondition())
          changeTheSlot(i);
        });
       }
       
      }


      
    let turnPlayed = 0;
  function changeTheSlot(number) {  

    if (winCondition() !== `No winner yet`) {
      
      return 0;

    }

    turnPlayed ++ ;

    if (slotsArray[number].textContent !== `X` && slotsArray[number].textContent !== `O`) {
      slotsArray[number].textContent = `${turn}`; 

    //this one will change the player
    if (turn ==`${player1.mark}`) {
      turn = `${player2.mark}`
    }
    else {
      turn = `${player1.mark}`
    }
    } 
    //this else is when you press again in on already clicked box
    else {
    console.log(`wonrg, Already taken`) 
    }
  }

  

      return { sayPlayersName };
    })();
  
//@@@@@@@@@@@@@@@@@@@@@ end of gameBoard   

    gameBoard.sayPlayersName(player1,player2);
  
let turn = `${player1.mark}`
 

function winCondition(){ 

  //Side pattern For X
  if (slotsArray[0].textContent === `X` && slotsArray[1].textContent === `X` && slotsArray[2].textContent === `X` ) {
    console.log(`${player1.name} wins`)
    return player1.name;
  }
  if (slotsArray[3].textContent === `X` && slotsArray[4].textContent === `X` && slotsArray[5].textContent === `X` ) {
    console.log(`${player1.name} wins`)
    return player1.name;
  }
  if (slotsArray[6].textContent === `X` && slotsArray[7].textContent === `X` && slotsArray[8].textContent === `X` ) {
    console.log(`${player1.name} wins`)
    return player1.name;
  }
// win by horizontal X
  if (slotsArray[0].textContent === `X` && slotsArray[3].textContent === `X` && slotsArray[6].textContent === `X` ) {
    console.log(`${player1.name} wins hhh`)
    return player1.name;
  }
  if (slotsArray[1].textContent === `X` && slotsArray[4].textContent === `X` && slotsArray[7].textContent === `X` ) {
    console.log(`${player1.name} wins hhh`)
    return player1.name;
  }
  if (slotsArray[2].textContent === `X` && slotsArray[5].textContent === `X` && slotsArray[8].textContent === `X` ) {
    console.log(`${player1.name} wins hhh`)
    return player1.name;
  }
// win by X cross
  if (slotsArray[0].textContent === `X` && slotsArray[4].textContent === `X` && slotsArray[8].textContent === `X` ) {
    console.log(`${player1.name} wins cross`)
    return player1.name;
  }
  if (slotsArray[2].textContent === `X` && slotsArray[4].textContent === `X` && slotsArray[6].textContent === `X` ) {
    console.log(`${player1.name} wins`)
    return player1.name;
  }
   



  //Side pattern For O
  if (slotsArray[0].textContent === `O` && slotsArray[1].textContent === `O` && slotsArray[2].textContent === `O` ) {
    console.log(`${player2.name} wins`)
    return player2.name;
  }
  if (slotsArray[3].textContent === `O` && slotsArray[4].textContent === `O` && slotsArray[5].textContent === `O` ) {
    console.log(`${player2.name} wins`)
    return player2.name;
  }
  if (slotsArray[6].textContent === `O` && slotsArray[7].textContent === `O` && slotsArray[8].textContent === `O` ) {
    console.log(`${player2.name} wins`)
    return player2.name;
  }
// win by horizontal O
  if (slotsArray[0].textContent === `O` && slotsArray[3].textContent === `O` && slotsArray[6].textContent === `O` ) {
    console.log(`${player2.name} wins hhh`)
    return player2.name;
  }
  if (slotsArray[1].textContent === `O` && slotsArray[4].textContent === `O` && slotsArray[7].textContent === `O` ) {
    console.log(`${player2.name} wins hhh`)
    return player2.name;
  }
  if (slotsArray[2].textContent === `O` && slotsArray[5].textContent === `O` && slotsArray[8].textContent === `O` ) {
    console.log(`${player2.name} wins hhh`)
    return player2.name;
  }
// win by O cross
  if (slotsArray[0].textContent === `O` && slotsArray[4].textContent === `O` && slotsArray[8].textContent === `O` ) {
    console.log(`${player2.name} wins cross`)
    return player2.name;
  }
  if (slotsArray[2].textContent === `O` && slotsArray[4].textContent === `O` && slotsArray[6].textContent === `O` ) {
    console.log(`${player2.name} wins`)
    return player2.name;
  }

 return `No winner yet` ;
  
}
