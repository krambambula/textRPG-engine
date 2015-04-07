function board() {
  var lengthBoard = 2;
  var heightBoard = 2;

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
              $("#gameBoard tr:nth-child(" + i + ")").addClass('row' + i);
          };

          //generate the columns
          for(var i = 0; i < height+1; i++){
              for(var a = 0; a < length; a++){
                  $(".row" + i).append("<td>&nbsp;</td>");
              }
          };
      };
  };

  this.place = function(object, x, y){
    if(object.length < 2 && object.length > 0){
      $(".row" + y + " td:nth-child(" + x +")").text(object);
    } else{
      return("The object length can't be longer or smaller then 1")
    }
  };

  this.remove = function(x, y){
    $(".row" + y + " td:nth-child(" + x +")").text("&nbsp;");
  };

  this.placePlayer = function(){
    var x = 1;
    var y = 1;

    $(".row" + y + " td:nth-child(" + x +")").html("@"); //draws the player art

    $("body").keydown(function(e) {
      if(e.which == 37){
        //left
        $(".row" + y + " td:nth-child(" + x +")").html("&nbsp;");
        x--;
      }else if(e.which == 38){
        //up
        $(".row" + y + " td:nth-child(" + x +")").html("&nbsp;");
        y--;
      }else if(e.which == 39){
        //right
        $(".row" + y + " td:nth-child(" + x +")").html("&nbsp;");
        x++;
      }else if(e.which == 40){
        //down
        $(".row" + y + " td:nth-child(" + x +")").html("&nbsp;");
        y++;
      };
      $(".row" + y + " td:nth-child(" + x +")").html("@"); //draws the player art
    });

  };
};
