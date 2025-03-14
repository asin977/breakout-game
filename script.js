const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth =560;
const ballDiameter = 20;
const boardHeight = 510;
let xDirection = 2;
let yDirection = 2;
const userStart = [230,10]
const ballStart = [270,40];

let timerId;

let currentPosition = userStart 
let ballCurrentPosition = ballStart;

//Inorder to create individual blocks of 15 NOs we can create a class.
class Block {
    constructor(xAxis, YAxis) {
        this.bottomLeft = [xAxis, YAxis];
        this.bottomRight = [xAxis + blockWidth, YAxis];
        this.topLeft = [xAxis, YAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, YAxis + blockHeight];
    }
}
//all my blocks

const blocks = [
    new Block(10, 480),
    new Block(120, 480),
    new Block(230, 480),
    new Block(340, 480),
    new Block(450, 480),

    new Block(10, 450),
    new Block(120, 450),
    new Block(230, 450),
    new Block(340, 450),
    new Block(450, 450),

    new Block(10, 420),
    new Block(120, 420),
    new Block(230, 420),
    new Block(340, 420),
    new Block(450, 420),

    new Block(10, 390),
    new Block(120, 390),
    new Block(230, 390),
    new Block(340, 390),
    new Block(450, 390),

    new Block(10, 360),
    new Block(120, 360),
    new Block(230, 360),
    new Block(340, 360),
    new Block(450, 360),

    new Block(10, 330),
    new Block(120, 330),
    new Block(230, 330),
    new Block(340, 330),
    new Block(450, 330),

    new Block(10, 300),
    new Block(120, 300),
    new Block(230, 300),
    new Block(340, 300),
    new Block(450, 300),

    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
];

// draw all my blocks

function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}
addBlocks();

// add user

const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

// draw the user

function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] +'px';
}

// move user

function moveUser(e) {
    switch(e.key) {
        case 'ArrowLeft':
        if (currentPosition[0]>0) {
            currentPosition[0] -= 10;
            drawUser();
           }
        break;
        case 'ArrowRight' :
            if (currentPosition[0]< boardWidth-blockWidth) {
                currentPosition[0] +=10;
                drawUser();
            }
        break;
         } 
   }

document.addEventListener('keydown',moveUser);

// add balls
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);


// moving the ball

function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
}
timerId = setInterval(moveBall,30);

// check for collisions

function checkForCollisions() {
    //check for wall collisions
    if (
        ballCurrentPosition[0] >= (boardWidth-ballDiameter) ||
        ballCurrentPosition[1] >= (boardHeight-ballDiameter) ||
        ballCurrentPosition[0] <= 0
        ){ 
        changeDirection();
    }
    
    // check for game over
    if (ballCurrentPosition[1] >= 0) {
        clearInterval(timerId)
        scoreDisplay.innerHTML ='You Lose'
        document.removeEventListener('keydown',moveUser);
    }

}



function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2;
        return
    } 
    if (xDirection== 2 && yDirection== -2)  {
        xDirection = -2;
        return
    }
    if (xDirection==-2 && yDirection == -2) {
        yDirection =2;
        return
    }
    if (xDirection === -2 && yDirection=== 2) {
        xDirection = 2;
        return
    }
}
