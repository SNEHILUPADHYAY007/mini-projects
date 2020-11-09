const dino=document.querySelector(".dino");
const obstacle=document.querySelector(".obstacle");
const displayScore=document.querySelector(".dispScore");
let count=0;
let interval;

function jump(event){
    const jump=dino.classList;
    
    if(event.which===38||event.keycode===38){
        displayScore.innerHTML=score();
        if(jump!="animate"){
            jump.add("animate");
        }
        setTimeout(()=>{
            jump.remove("animate");
        },500);
    }
}

let checkObstacle=setInterval(() => {
       const obsTackle=obstacle.style;
       const dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
       const obstacleLeft=parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
       if(obstacleLeft<50 && obstacleLeft>0 && dinoTop>=130){
         obsTackle.animation="none";
         obsTackle.display="none";
         count=0;
         clearInterval(interval);
         alert("losss");
       }

},10);

function score(){
    console.log('hi');
    interval=setInterval(() => {
        displayScore.innerHTML=count++;
    }, 100);
    return interval;
}