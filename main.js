var theButton = document.createElement('button');
var squareCounter = 1;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//BEGINNING
document.addEventListener("DOMContentLoaded", function() {
    theButton.innerText = "Add Square";
    document.body.appendChild(theButton);
    //BUTTON
    theButton.addEventListener("click", function(){
        var squareDiv = document.createElement('div');
        squareDiv.className = "square-divs";
        var squareId = document.getElementsByTagName ('div');
        squareDiv.id = squareId.length;
        squareCounter++;
        theButton.appendChild(squareDiv)
        document.body.appendChild(squareDiv);
        var divId = document.createElement('h3');
        divId.style.color = "white";
        squareDiv.appendChild(divId);
        //MOUSE
        squareDiv.addEventListener("mouseover", function() {
            divId.innerText = squareDiv.id;
        });
        //MOUSE
        squareDiv.addEventListener("mouseleave", function() {
            divId.innerText = "";
        });
        //RANDOM COLOR GENERATOR
        squareDiv.addEventListener("click", function() {
            squareDiv.style.background = getRandomColor();
        });
        //DOUBLECLICK
        squareDiv.addEventListener("dblclick", function() {
            if (squareDiv.previousSibling === theButton) {
                alert('Nothing to remove');
            } else if (squareDiv.id % 2 != 0) {
               squareDiv.previousSibling.remove();
            } else if (squareDiv.nextSibling === null) {
               alert('Nothing to remove');
            } else if (squareDiv.id % 2 === 0) {
               squareDiv.nextSibling.remove();
            };
        });
    });
});