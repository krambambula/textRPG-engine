function board() {
    
    //This function generates a table with the given variables height and weight
    this.generate = function(length, height){
        //the height can't be more then 20 and the length more then 40
        if(length <= 40 && height <= 20){
            //generate the rows
            for(var i = 0; i < height-1; i++){
                $("#gameBoard").append("<tr></tr>");
            };
            
            //give the rows a class with the number of the row
            for(var i = 0; i < height+1; i++){
                $("tr:nth-child(" + i + ")").addClass('row' + i);
            };
            
            //generate the columns
            for(var i = 0; i < height+1; i++){
                for(var a = 0; a < length; a++){
                    $(".row" + i).append("<td>#</td>");
                }
            };
        };
    };
    
    this.place = function(object, x, y){
        $(".row" + y + " td:nth-child(" + x +")").text(object);
    };
    
    this.remove = function(x, y){
        $(".row" + y + " td:nth-child(" + x +")").text("#");
    };
};