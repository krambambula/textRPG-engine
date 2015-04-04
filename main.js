$(document).ready(function() {
    console = new console();
    board = new board();
    console.printLine("asd");
    board.generate(40,20);
    console.clear();
    board.place("a", 4, 4);
});