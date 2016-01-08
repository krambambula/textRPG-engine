#textRPG-engine

This engine is created to make textRPG games very easy. The engine has two part the console and the board.

##Console:
The console is the place under the board. In the console you can print text for the story.

To start the console define a function in a variable:
console = new console();

If you have done that the build in functions can be called like this:
console.clear();

###Available function for the console:
* `printLine(string);`
* `Clear();`

##Board:
This is the top part in the program and displays ASCII graphics.

To start the console define a function in a variable:
board = new board();

If you have done that the build in functions can be called like this:
board.generate(length, height);

###Available function for the board:
* `generate(length, height);`
* `place(object, x, y);`
* `placePlayer();`
* `Remove();`

