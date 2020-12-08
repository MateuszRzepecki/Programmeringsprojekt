//snake variables
var Snake = {x: 100, y: 100, width: 30, height: 30, movement: 2}; 
    //background (likely to be changed)
    background(0, 0, 0);
        // early stage snake model
        fill(33, 242, 22);
        noStroke();
        rect(Snake.x, Snake.y, Snake.width, Snake.height);