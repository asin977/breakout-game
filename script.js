const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 600;
const userStart = [230,10]
let currentPosition = userStart 

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

console.log(blocks)
console.log(blocks[0])
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

document.addEventListener('keydown',moveUser)

// add balls
const ball = document.createElement('div');
ball.classList.add('ball');
grid.appendChild(ball)



