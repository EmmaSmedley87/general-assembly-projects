function init() {
  //references to dom elements
  const grid = document.querySelector(".grid");
  const scoreDisplay = document.getElementById("score");
  const livesDisplay = document.getElementById("lives");
  const gameOverDisplay = document.querySelector(".gameOver");
  const text = document.querySelector(".text");
  console.log(gameOverDisplay);

  const startGame = document.getElementById("startGame");
  const cells = [];
  let lives = 3;
  let score = 0;
  let isShredderFrozen = false;
  //   let gameOver = 0;

  // *grid variables
  const width = 10;
  const cellCount = width * width;

  // game variables
  // where's our ninja turtle?
  // turtle starting position
  // let startingPosition = 0
  let turtlePosition = 65;

  // ninja turtle player will apear in the ninjaturtlegrid
  // // add turtle
  function addTurtle() {
    cells[turtlePosition].classList.remove("turtle");
    cells[turtlePosition].classList.add("turtle");
  }

  // remove turtle
  function removeTurtle(position) {
    cells[turtlePosition].classList.remove("turtle");
  }

  // when page loads player will see pac man grid
  // create ninja grid
  function createNinjaGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement("div");
      // this creates text on screen
      // cell.textContent = i;
      // this goes into cell on screen
      grid.appendChild(cell);
      // this is a reference of our logic
      cells.push(cell);
    }
    addTurtle();
  }

  console.log("hello");

  // move when finger is taken off
  // function handleKeyUp(event) {
  //     removeTurtle(turtlePosition) // removes turtle from current position

  //     const x = turtlePosition % width
  //     const y = Math.floor(turtlePosition / width)

  // console.log(turtlePosition)

  // * calculate the next position and update it
  // switch(event.keyCode) {
  //     case 39: //right
  //         if (cells[turtlePosition +1].classList.contains('wall')) turtlePosition += 0
  //         else if (x < width - 1) turtlePosition +=1
  //         break
  //     case 37: //left
  //         if (cells[turtlePosition -1].classList.contains('wall')) turtlePosition --
  //         else if (x > 0) turtlePosition -=1
  //         break
  //     case 38: //up
  //         if (cells[turtlePosition -10].classList.contains('wall')) turtlePosition ++
  //         else if (y > 0) turtlePosition -= width
  //         break
  //     case 40: //down
  //         if (cells[turtlePosition +10].classList.contains('wall')) turtlePosition += width
  //         else if (y < width -1) turtlePosition += width
  //         break
  //         default:
  //             console.log('you can not move turtle like that')
  // }
  //         addTurtle(turtlePosition) // add turtle back at the new position
  // }
  // turtle key movement
  function handleKeyUp(event) {
    const key = event.keyCode; // store the event.keyCode in a variable to save us repeatedly typing it out
    console.log("POSITION BEFORE REDEFINING --->", turtlePosition);
    removeTurtle(turtlePosition); // remove the turtle from its current position

    if (key === 39 && canMoveRight(turtlePosition)) {
      // if the right arrow is pressed and the turtle is not on the right edge
      turtlePosition++;
      turtlePizzaEaten(); // redefine turtle position index to be previous position plus 1
    } else if (key === 37 && canMoveLeft(turtlePosition)) {
      // if the left arrow is pressed and the turtle is not on the left edge
      turtlePosition--;
      turtlePizzaEaten(); // redefine turtle position index to be previous position minus 1
    } else if (key === 38 && canMoveUp(turtlePosition)) {
      // if the up arrow is pressed and the turtle is not on the top row
      turtlePosition -= width;
      turtlePizzaEaten(); // redefine turtle position index to be previous position minus width
    } else if (key === 40 && canMoveDown(turtlePosition)) {
      // if the down arrow is pressed and the turtle is not on the bottom row
      turtlePosition += width;
      turtlePizzaEaten(); // redefine turtle position index to be previous position plus width
    } else {
      console.log("INVALID KEY"); // any other key, log invalid key
    }
    console.log("POSITION AFTER REDEFINING --->", turtlePosition);
    addTurtle(turtlePosition); // add turtle to the new position that was defined in the if statement above
    turtleGainsKarateBand();
    turtleMeetsSplinter();
    turtleShredderCollision();
  }
  function canMoveRight(position) {
    return (
      position % width !== width - 1 &&
      !cells[position + 1].classList.contains("wall") &&
      !cells[position + 1].classList.contains("shredderLair")
    );
  }

  function canMoveUp(position) {
    return (
      position >= width &&
      !cells[position - width].classList.contains("wall") &&
      !cells[position - width].classList.contains("shredderLair")
    );
  }

  function canMoveDown(position) {
    return (
      position + width <= width * width - 1 &&
      !cells[position + width].classList.contains("wall") &&
      !cells[position + width].classList.contains("shredderLair")
    );
  }

  function canMoveLeft(position) {
    return (
      position % width !== 0 &&
      !cells[position - 1].classList.contains("wall") &&
      !cells[position - 1].classList.contains("shredderLair")
    );
  }

  //moveShredderFunction
  // game variables
  // where's shredder?
  // shredder starting position
  let shredderPosition = 44;

  // shredder will apear in the ninjaturtlegrid
  // // add shredder
  function addShredder() {
    cells[shredderPosition].classList.add("shredder");
  }

  // remove shredder
  function removeShredder(position) {
    cells[shredderPosition].classList.remove("shredder");
  }

  function handleShredderKeyUp(event) {
    if (isShredderFrozen) {
      return;
    }
    const key = event.keyCode; // store the event.keyCode in a variable to save us repeatedly typing it out
    console.log("SHREDDER POSITION BEFORE REDEFINING --->", shredderPosition);
    removeShredder(shredderPosition); // remove the shredder from its current position
    if (key === 39 && canMoveRight(shredderPosition)) {
      // if the right arrow is pressed and the shredder is not on the right edge
      shredderPosition++;
    } else if (key === 37 && canMoveLeft(shredderPosition)) {
      // if the left arrow is pressed and the shredder is not on the left edge
      shredderPosition--;
    } else if (key === 38 && canMoveUp(shredderPosition)) {
      // if the up arrow is pressed and the shredder is not on the top row
      shredderPosition -= width;
    } else if (key === 40 && canMoveDown(shredderPosition)) {
      // if the down arrow is pressed and the shredder is not on the bottom row
      shredderPosition += width;
    } else {
      console.log("INVALID KEY"); // any other key, log invalid key
    }
    console.log("SHREDDER POSITION AFTER REDEFINING --->", shredderPosition);
    addShredder(shredderPosition); // add shredder to the new position that was defined in the if statement above
  }

  //if the turtle hits class list of wall then do not allow to pass something

  createNinjaGrid();

  // creating wall layout of grid
  // 1= wall
  // 2= turtlePizza
  // 3= shredderLair, shredder
  // 4= karateBand
  // 5= masterSplinter
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 1, 2, 1, 5, 2, 1, 1, 2, 1, 1, 1,
    2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 3, 6, 2, 1, 2, 1,
    1, 1, 1, 2, 6, 6, 2, 1, 2, 1, 1, 2, 2, 4, 2, 2, 2, 1, 2, 1, 1, 2, 1, 1, 1,
    1, 1, 1, 2, 1, 1, 2, 2, 2, 1, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  // const squares = []

  // draw grid with items and render it
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      // const square = document.createElement('div')
      // grid.appendChild(square)
      // squares.push(square)

      //add layout styling to the grid board
      if (layout[i] === 1) {
        cells[i].classList.add("wall");
      } else if (layout[i] === 2) {
        cells[i].classList.add("turtlePizza");
      } else if (layout[i] === 3) {
        cells[i].classList.add("shredderLair", "shredder");
      } else if (layout[i] === 4) {
        cells[i].classList.add("karateBand");
      } else if (layout[i] === 5) {
        cells[i].classList.add("masterSplinter");
      } else if (layout[i] === 6) {
        cells[i].classList.add("shredderLair");
      }
    }
  }
  createBoard();

  // if turtle hits wall do not let turtle move past wall

  // // ninjaturtle will pulse
  // const pulseTimes = 3
  // function pulseCallback() {
  //     ++currentPulseTimes;
  //     if (currentPulseTimes < pulseTimes) //do next pulse
  //     this.animate(AP.EffectType.PULSE, 500, {callback: pulseCallback});
  // }

  // //first pulse
  // turtlePosition.object('Turtle').animate(AP.EffectType.PULSE, 500, {callback: pulseCallback});

  //   turtlePizzaEaten();
  //   turtleGainsKarateBand();
  //   gameOver();
  //   turtleShredderCollision();

  // event listeners ()
  document.addEventListener("keyup", handleKeyUp);
  document.addEventListener("keyup", handleShredderKeyUp);

  // what happens when turtle eats a pizza
  function turtlePizzaEaten() {
    if (cells[turtlePosition].classList.contains("turtlePizza")) {
      score++;
      scoreDisplay.innerHTML = score;
      cells[turtlePosition].classList.remove("turtlePizza");
    }
  }

  function turtleMeetsSplinter() {
    if (cells[turtlePosition].classList.contains("masterSplinter")) {
      freezeShredderForFiveSeconds();
      cells[turtlePosition].classList.remove("masterSplinter");
    }
  }

  // what happens when turtle catches a karateband
  function turtleGainsKarateBand() {
    if (cells[turtlePosition].classList.contains("karateBand")) {
      lives++;
      livesDisplay.innerHTML = lives;
      cells[turtlePosition].classList.remove("karateBand");
      text.innerHTML = "Extra Life Gained";
    }
  }

  //   function getExtraLife() {
  //     return lives;
  //   }

  function looseLife() {
    return (lives -= 1);
  }

  function resetShredder() {
    removeShredder();
    shredderPosition = 44;
    addShredder();
  }

  function resetTurtle() {
    removeTurtle();
    turtlePosition = 65;
    addTurtle();
  }

  function gameOver() {
    if (lives === 0) {
      console.log("gameOver");
      // gameOverDisplay.style.display = "block";
      text.innerHTML = "Game over! Play Again?";
      // clearInterval();
    }
  }

  // when turtle lands on Master Splinter freeze Shredder for five seconds
  function freezeShredderForFiveSeconds() {
    // freeze shredder
    freezeShredder();
    // unfreeze shredder after 5 seconds
    setTimeout(unfreezeShredder, 5000);
  }

  function freezeShredder() {
    isShredderFrozen = true;
    text.innerHTML = "Shredder Is Frozen";
  }

  function unfreezeShredder() {
    isShredderFrozen = false;
    text.innerHTML = "WATCH OUT! Shredder's Back On The Move!";
  }

  // startGame.onClick = function () {
  //   alert("Game started");
  // };

  // when turtle and shreddeer collide
  function turtleShredderCollision() {
    // if a cell contains shredder and turtle
    if (shredderPosition === turtlePosition) {
      // minus 1 life and adjust lives remaining
      looseLife();
      setInterval(gameOver, 500);
      //remove shredder and turtle from current cell and add to reset positions
      resetTurtle();
      resetShredder();
      livesDisplay.innerHTML = lives;
    }
  }
}
window.addEventListener("DOMContentLoaded", init);

//karateBandEaten()
//checkForGameOver()

// *SCREEN*
/// when page loads player will see ninja turtle grid
/// player will see pizzas in the grid (pizzas will be pulsing)
// player will press start for game to begin
// player will see player options to select from (the 4 turtles)
// player will hear ninja tutles theme tune
// player will see ninja turtle logo
// player will see themed background
// player will see sewer grid

// *ACTIONS COMPLETE*
/// ninja turtle player will apear in the ninjaturtlegrid
/// player will manauvour turtle around screen using arrow keys
/// if turtle hits wall do not let turtle move past wall
/// do not let turtle enter shredderLair
/// turtle will eat pizzas as turtle navigates around screen (add add 10 points to score)
/// when page loads player will see ninja turtle grid
/// shredder will appear in shredderLair
/// shredder will appear as random selection
/// turtle will catch karate band (and add extra life)
/// if shredder catches you then minus life
/// if turtle looses a life reset turtle to turtle position and shredder to shredder position
/// if shredderposition catches turtleposition and life is equal to 1 then gameOver
// if turtlePosition meets masterSplinter then freezeShredderPosition 5 seconds
///start button on screen

// *NEXT UP*
// if all pizzas eaten then 'you win'
// if shredder is frozen activate a 5 second countdown on screen otherwise no countdown
// ninja turtle soundtrack
// ninja turtles logo
// turtle lives image

// start game button to connect to game
// play agin button to restart game
// if game over then play again or end game (create buttons)
// pulse images on start

// *ACTIONS TO DO*
// ninjaturtle will pulse
// player will select a ninja turtle player ('Leonardo', 'Michelangelo', 'Donatello' and 'Raphael')
// 4 turtle lives will be on screen
// when turtlepulses 'pizzas' will do nothing
// start will pulse to alert player to begin
// when arrow keys are pressed 'pizzas' will pulse
// player will select start button
// phrase will sound to alert player turtle is ready to begin
// selected turtle will appear on screen in start position and pulse
// ninja turtles phrase will sound to alert player start game has been actioned
// when arrow keys are pressed master shredder and turtle karate band will pulse
// turtle will gain extra life if obtains 'master splinter' otherwise do nothing with turtle life
// turtle master splinter life will be displayed on screen outside box but inside outer box
// turtle will action 'turtle power' phrase if obtains master splinter life
// turtle will action '      ' phrase if looses master splinter life
// turtle karate band life will be displayed on screen outside box but inside outer box
// turtle will action 'turtle power' phrase if obtains turtle karate band life
// turtle karate band life on screen will match turtle player selected
// if shredder catches turtle and turtle has no master splinter life and no remaining lives the game over otherwise turtle will continue in game
// tutle will action random encouraging phrase if a certain amount of pizzas have been eaten
// turtle will action random phrase if looses master splinter life or turtle life otheriwse player theme song
// if game over then game over screen to be actioned with shredder has caught you image otherwise do nothing
// if game over then back play again or end game

// *AUDIO ACTIONS*

// *HARD MODE*
// when in hardmode less turtle lives
// shredder to appear more often
// no karate band to freeze shredder
// bigger pac man box with more pizzas to get
