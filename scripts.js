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
let turn = `X`

//this one is the class
const player = (name, mark) => {
    const sayHello = () => console.log(`Hello i'm the ${name} and my mark is ${mark}`);
    return { name, mark, sayHello  };
  };
  //those are the objects, players
  const player1 = player('Human', `x`);
  const player2 = player(`bot`, `o`); 
  player1.sayHello();  
  player2.sayHello(); 



  const gameBoard = (() => {
      const sayPlayersName = (player1 , player2) => console.log(` player1 is ${player1.name} and player2 is ${player2.name} hehe`)
      const playerMove = (player , location) => console.log(`this will set the location wiht the player marker`)
      return { sayPlayersName };
    })();
  
    gameBoard.sayPlayersName(player1,player2);
  


    
    //this loop is all the event listener ( instead of making 8 , make 1 loop)
  for (let i = 0 ; i<=8 ; i++) { 
    slotsArray[i].addEventListener("click" , function(e) {
      changeTheSlot(i);
  });
  }


  function changeTheSlot(number) { 

    if (slotsArray[number].textContent !== `X` && slotsArray[number].textContent !== `O`) {
      slotsArray[number].textContent = `${turn}`; 
    //this one will change the player
    if (turn ==`X`) {
      turn = `O`
    }
    else {
      turn = `X`
    }
    } 
    //this else is when you press again in on already clicked box
    else {
    console.log(`wonrg, Already taken`) 
    }
  }
  