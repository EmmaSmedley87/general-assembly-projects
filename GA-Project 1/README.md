# Ninja-Turtles-Pac-Man

**Table of Contents**

- Project Overview
- The Brief
- Technologies Used
- Approach Taken & Timeline
- Wins & Challenges
- Future Content and Improvements
- Key Learnings

**Project Overview**

Ninja Turtles Pac Man is as the title suggests a Ninja Turtles take on the original Pac Man game. The Ninja Turtles are craving pizza as usual, the objective of the game is to munch all of the pizzas on the board, but watch out shredder is out to get you!

This was the first project in General Assembly's Software Engineering Immersive course. It was vanilla Javascript game built for the browser, indivisually with a timeline of 7 days!


**Game Instructions**

- Use the arrow keys to move turtle acround the grid
- Press an arrow key in the direction you want to move to start game


**Brief**

Your app must:
- Render a game in the browser
- Be built on a grid : do not use HTML Canvas
- Design logic for winning and visually display which player won
- Include seperate HTML/CSS/Javascript files
- Strick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourselves)


**Technologies Used**

- HTML5
- Javascript (ES6)
- SASS (SCSS)
- CSS
- GIT
- GitHub


**The Process**

- Day 1: Planning of project, deciding on MVP
- Day 6 - MVP achieved
- Day 7 - Add basic styling and get shredder chasing feature to work

*Day 1 Highlights*

I only spent an hour or so brainstorming game ideas before i settled on my Ninja Turtles Pac Man idea. As a big fan of 80's style games i thought it was be an enjoyable game to recreate and play. Additionally, as a 2d game without any special effects this choice allowed me to concentrate on solving the problems within the Javascript code without worrying about all the snazzy style bits working- which i thought was important for my first project.

I created a timeline to ensure i would meet the deadline and achieve my MVP with some time to spare- to allow for any problems that might rise during the game build. I also clearly distinguished my essential features from my 'nice to have's', so i wouldn't take on more than i could achieve within the timeframe, but had noted some cool feature for future improvements.

*Day 2 Highlights*

For my games MVP i decided that the player must be able to;

- Move the turtle in all directions 
- Get points added for the turtle eating the pizzas
- Get extra life if land on karate band
- Not be able to move turtle through walls
- Loose a life if Shredder landed on turtle
- Freeze Shredder if land on Master Splinter
- Be chased by Shredder
- Not be able to enter Shredder's lair (the 4 squares in the middle of the grid)
- Know how many lives they have remaining

*Day 3/4 Highlights*

Created the grid system layout using an array structure and assigning classes with the createBoard function and an if else statement to dictate what each square in the grid would hold. Created initial turtle movement around the board (left, right, up and down) with 4 handKeyFuctions that referenced the turtlePosition function via event listeners and would addTurtle or removeTurtle based on the current position and if it was moving to a wall or shreddersLair. Created the ability to freeze Shredder if Shredder 'caught' turtle (by landing on the same square in the grid. This worked by referencing my createBoardFreezeShredderfunction ifTurtleMeetsSplinter, referencing if turtlePosition equals shredderPosition and using a boolean to check if shredderIsFrozen, if true then freezeShredderForFiveSeconds and resetTurtle and resetShredder for continued play. 

*Day 5/6 Highlights*

Created a function for what happens if turtleGainsKarateBand referencing the turtlePosition and adding a life if turtlePostion equals karateBand position and similarlly a life lost if there is a shredderTurtleCollision and points added if turtlePizzaEaten. Added grid imagery with an if else statement referencing my class lists. Created shredder .random movement around board using shredderPosition. Add basic css styling

*Day 7 Highlights*

Shredder predictave movement added and sorted the turtle pizza removal problem when landing on each grid possition displaying a pizza. (See challenges and wins)


**Wins and Challenges in the Code**

*Challenges*

Getting the turtle to move in all directions but not through walls and also getting the pizza to 'dissapear' from the screen once the turtle had eaten it- this was actually one of the biggest challenges i overcame during this project.

*Wins*

A big win for me was getting Shredder to not only randomly appear on a square in a shredderPosition, but to predictivly move Shredder nearer based on the movements that the player chose for the turtlePosition. I was really happy with this as my MVP was for Shredder to just randomly appear in a different box each time turtle moved.


**Future Features and Improvements**

- Inform player of 'game over' if all lives lost
- Build a start game button
- Ask if player wants to play again- implement 'play again' button
- Rules of game pop up implemented 
- Fun ninja turtle styling features
- Nija turtles music playing on entering site
- Noise and catchphrase words added when land on Master Splinter
- Chomping noise when turtle 'eats' a pizza


**Key Learnings**

The importance of commenting your code when it comes to refactoring of referencing it later in the project. The use of implementing functions and referencing them, instead of creating a new function each time- this helps to keep the code DRY and clean. Using classes when creating a project to enable you to vary what functioanlity will be applied to each. 

How to create a grid system with an array and then use this system as a basis to create further functionality in the game. Most importantly i've learned the importance of MVP and creating an end project that works overall over additional cool features without a functional end product.


