let p = 0

let time

let c = document.querySelector('canvas')

c.height = innerHeight
c.width = innerWidth

let a = c.getContext("2d")
let best = 0
class Ball {
    constructor(x, y, g) {
        this.r = randum(15, 20);
        this.x = x || randum(0, innerWidth);
        this.y = y || randum(0, innerHeight);
        this.vx = (Math.random() - 0.5) * 4
        this.vy = (Math.random() - 0.5) * 4;
        this.draw()
        this.g = g || 0
    }
    draw() {
        a.beginPath()
        a.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        a.fillStyle = "red"
        a.fill()
        a.fillStyle = "black"
        a.fillText(`score : ${p}   best score : ${best}   time : ${10-time}`, 20, 40)
        a.font = '20px italic '
    }
    update() {
        if (this.x + this.r > innerWidth || this.x - this.r < 0) this.vx = -1 * this.vx
        if (this.y + this.r > innerHeight || this.y - this.r < 0) this.vy = -this.vy
        this.vx += this.g
        this.x += this.vx
        this.y += this.vy
        this.draw()

    }
}

let ball = []



window.addEventListener("click", (e) => {

}, {
    once: true
})

function loop(R){
for (i = 0; i < 4+R; i++) {
    ball.push(new Ball)
}
}

loop()

let w = ball.length

function animate() {
    a.clearRect(0, 0, 10000, 100000)
    ball.forEach(ball => {
        ball.update()
    })
    requestAnimationFrame(animate)
}


function randum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

animate()


window.addEventListener("resize", () => {
    c.width = window.innerWidth
    c.height = window.innerHeight
})



function Time(){
   time=0
   setInterval((e)=>{
      
       time++
       if(time==10){
           alert('time out')
           time=0
           if(p>best)best=p
           p=0
           
       }
   },1000)
   
}
   

let m = 0

let R=4
window.addEventListener("click", (e) => {
    let sx = e.clientX
    let sy = e.clientY
    let m = 1
    ball.forEach(ball => {
        let d = Math.sqrt(e.clientX - ball.x, 2) + Math.sqrt(e.clientY - ball.y, 2)
        if (ball.x - ball.r * 2 < e.clientX && e.clientX < ball.x + ball.r &&
            ball.y - ball.r * 2 < e.clientY && e.clientY < ball.y + ball.r
        ) {
            ball.r = 0
            console.log('y ' + ball.y, 'c ' + e.clientY)
            m--


        }



    })
    w = ball.length
    ball.forEach(ball => {
        if (ball.r == false && w > 0) {
            // w--
        }


    })



    let G = 0
    if (m) {
        ball.push(new Ball(e.clientX, e.clientY, G))
        ball.vx++
        ball.vy++
        G += 10
        w++
    } else {
        w--
        p++
    }
     w = 0
    ball.forEach(ball => {
       
        if (ball.r == 0) w++
    })



    if (w == ball.length) {
       
        if (p > best){
             best = p
             alert(`LOL new record :P you have got (${p}) grades`)
             time=0
             p=0
            }
        
        else{
            alert(`good luck :) you have got (${p}) grades`)
            time=0
            p=0
        }
        p = 0 

        loop(R)
        R++
    }
    console.log(ball[0].vx)
    

    

})



window.addEventListener("click",(e)=>{
    Time()
    document.querySelector("h1").style.display="none"
},{once:true})












