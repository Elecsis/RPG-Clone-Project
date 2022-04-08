const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



canvas.width = 1024;
canvas.height = 576;

const collisionsMap = []

for(let i=0; i<collisions.length; i+=70){
    collisionsMap.push(collisions.slice(i,70 + i))
}


class Boundary {
    constructor(position){
        this.position = positaddion
        this.width = 48
        this.height = 48
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x,this.position.y, this.width,this.height)
    }
}

const  boundaries = []

collisionsMap.forEach((rows,i)=>{
    rows.forEach((block,j) => {
        boundaries.push(
           new Boundary({
               position: {
               x: j * 48,
               y: i * 48
           }
           
        })
       )
    })
})
console.log(boundaries)



const island = new Image();
island.src = './img/rpgIslandMap.png';

const playerImg = new Image();// spirte imgs going down
playerImg.src = './img/playerDown.png';

class Sprite {
    constructor({position, velocity, image }) {
      this.position = position
      this.island = image
    }

    draw(){
        ctx.drawImage(this.island, this.position.x, this.position.y);
    } 
}

const background = new Sprite({
    position:{
        x: -355,
        y: -640
    },
    image: island
})

const controlKeys = {
     w: {
     pressed: false
     },
     a: {
     pressed: false 
     },
     s: {
     pressed: false
     },
     d: {
     pressed: false
     }
}


//animation loop
function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    ctx.drawImage(
        playerImg,
        0,//crop x position 
        0,//crop y position
        playerImg.width / 4,//crop size width/x
        playerImg.height,//crop size height/y
        canvas.width/ 2 - (playerImg.width / 4)/2 ,// x position on canvas
        canvas.height/ 2 - playerImg.height / 2,// y position on canvas
        playerImg.width / 4,//width of spirte
        playerImg.height// height of spirte
    )
    if(controlKeys.w.pressed && lastKey ==='w') background.position.y += 3
    else if(controlKeys.s.pressed && lastKey ==='s') background.position.y  -= 3
    else if(controlKeys.a.pressed && lastKey ==='a') background.position.x  += 3
    else if(controlKeys.d.pressed && lastKey ==='d') background.position.x  -= 3
}



animate()

let lastKey = "";

// event listner is to move sprite - when keys are pressed
window.addEventListener('keydown', (event)=>{
    switch(event.key){
        case 'w':
            controlKeys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            controlKeys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            controlKeys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            controlKeys.d.pressed = true
            lastKey = 'd'
            break  
        }
        
})

// event listner is to stop sprite from moving - when keys are depressed
window.addEventListener('keyup', (event)=>{
    switch(event.key){
        case 'w':
            controlKeys.w.pressed = false
            break
        case 'a':
            controlKeys.a.pressed = false
            break
        case 's':
            controlKeys.s.pressed = false
            break
        case 'd':
            controlKeys.d.pressed = false
            break  
        }
})

