function console() {
    this.printLine = function(string){
        var newOutput = string + "<br>";
        $("#console").append(newOutput);
    };
    
    this.clear = function(){
        $("#console").text("");
    }
};