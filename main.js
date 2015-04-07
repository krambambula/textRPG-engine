$(document).ready(function() {
    console = new console();
    board = new board();
    console.printLine("test");
    board.generate(30,20);
    board.place("@", 4, 4);
    board.placePlayer();
});
