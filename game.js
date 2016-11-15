var butterflyX = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    butterflyX -=15;
 document.getElementById("butterfly").setAttribute("x", butterflyX)

  }
  else if(e.keyCode == 39){
        butterflyX +=15;
 document.getElementById("butterfly").setAttribute("x", butterflyX)
  }
})
var butterflyY = 20;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 38){
    butterflyY -=15;
 document.getElementById("butterfly").setAttribute("y", butterflyY)

  }
  else if(e.keyCode == 40){
        butterflyY +=15;
 document.getElementById("butterfly").setAttribute("y", butterflyY)
  }
})
