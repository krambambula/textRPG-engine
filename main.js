$(document).ready(function() {
    console = new console();
    board = new board();
    console.printLine("test");
    board.generate(10,10);
    board.place("@", 4, 4);
    board.placePlayer();
});
