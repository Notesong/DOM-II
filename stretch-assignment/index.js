class Block {
    constructor () {
        this.position = 0;
        this.speed = 10;
    }
    mouseUp() { this.position = 0; }
    mouseDown() { this.position += this.speed; }
    updateStatus(block, mouse) {
        if (mouse === true) this.mouseDown();
        else if (mouse === false) this.mouseUp();
        block.style.left = this.position + 'px';
    }
}

// block declarations
let redBlock = new Block(), blueBlock = new Block(), greenBlock = new Block(), pinkBlock = new Block(), grayBlock = new Block();
// block selectors
const redBlockSel = document.querySelector('.block--red');
const blueBlockSel = document.querySelector('.block--blue');
const greenBlockSel = document.querySelector('.block--green');
const pinkBlockSel = document.querySelector('.block--pink');
const grayBlockSel = document.querySelector('.block--gray');

// mouse down flags
let rmouse = false, bmouse = false, gremouse = false, pmouse = false, gramouse = false;
// listeners for flags
redBlockSel.addEventListener('mousedown', () => { rmouse = true; });
blueBlockSel.addEventListener('mousedown', () => { bmouse = true; });
greenBlockSel.addEventListener('mousedown', () => { gremouse = true; });
pinkBlockSel.addEventListener('mousedown', () => { pmouse = true; });
grayBlockSel.addEventListener('mousedown', () => { gramouse = true; });
window.addEventListener('mouseup', () => {
    rmouse = false;
    bmouse = false;
    gremouse = false;
    pmouse = false;
    gramouse = false;
});

// loop for game
window.setInterval(() => {
    redBlock.updateStatus(redBlockSel, rmouse);
    blueBlock.updateStatus(blueBlockSel, bmouse);
    greenBlock.updateStatus(greenBlockSel, gremouse);
    pinkBlock.updateStatus(pinkBlockSel, pmouse);
    grayBlock.updateStatus(grayBlockSel, gramouse);
}, 10);