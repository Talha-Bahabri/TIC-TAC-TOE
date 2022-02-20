
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
      const sayPlayersName = (player1 , player2) => console.log(`....kplayer1 is ${player1.name} and player2 is ${player2.name} hehe`)
      return { sayPlayersName };
    })();
  
    gameBoard.sayPlayersName(player1,player2);
  


    