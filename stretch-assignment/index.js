// class definition for game blocks
class Block {
    constructor () {
        this.position = 0;
        this.speed = 10;
    }
    // return position to 0
    mouseUp() { this.position = 0; }
    // adjust position based on speed
    mouseDown() { this.position += this.speed; }
    // send block to top of stack
    goToTop(blockSel) {
        blocks.prepend(blockSel); 
    }
    // update the current position of the block on the x-axis
    // based on whether block was clicked and whether mouse is up or down
    // parameters:  block selector variable and mouse down flag
    updateStatus(blockSel, mousedown) {
        // check if mouse is up or down
        if (mousedown === true) {
            this.mouseDown();
            this.goToTop(blockSel);
        }
        else if (mousedown === false) this.mouseUp();
        // update block position accordingly on the x-axis
        blockSel.style.left = this.position + 'px';
    }
}

// block declarations
// used to set up properties and provide necessary functions
let redBlock = new Block(), blueBlock = new Block(), greenBlock = new Block(), pinkBlock = new Block(), grayBlock = new Block();
// block selectors
// used to move div blocks on webpage
const redBlockSel = document.querySelector('.block--red');
const blueBlockSel = document.querySelector('.block--blue');
const greenBlockSel = document.querySelector('.block--green');
const pinkBlockSel = document.querySelector('.block--pink');
const grayBlockSel = document.querySelector('.block--gray');
// blocks selector for all blocks
let blocks = document.querySelector('.blocks');

// mouse down and up - sends blocks traveling to right of screen
// mouse down flags
let rmouse = false, bmouse = false, gremouse = false, pmouse = false, gramouse = false;
// mouse down listeners for flags
// when mouse is down, set appropriate flag to true
// send block to top of stack
redBlockSel.addEventListener('mousedown', () => { rmouse = true; });
blueBlockSel.addEventListener('mousedown', () => { bmouse = true; });
greenBlockSel.addEventListener('mousedown', () => { gremouse = true; });
pinkBlockSel.addEventListener('mousedown', () => { pmouse = true; });
grayBlockSel.addEventListener('mousedown', () => { gramouse = true; });
// mouse up listeners for flags
// set all flags to false when mouse is up
window.addEventListener('mouseup', () => {    
    rmouse = false;
    bmouse = false;
    gremouse = false;
    pmouse = false;
    gramouse = false;
});

// loop for game
// updates the position of each block each game loop
window.setInterval(() => {
    redBlock.updateStatus(redBlockSel, rmouse);
    blueBlock.updateStatus(blueBlockSel, bmouse);
    greenBlock.updateStatus(greenBlockSel, gremouse);
    pinkBlock.updateStatus(pinkBlockSel, pmouse);
    grayBlock.updateStatus(grayBlockSel, gramouse);
}, 10);