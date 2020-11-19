let gameRunning = false,score = 0;
let colorsArr = ['red','orangered','green','blue'];


document.querySelector('html').addEventListener('click',() => {

    if(gameRunning){
        document.querySelector('.player').classList.add('jumpAnim');

        setTimeout( () => {
            document.querySelector('.player').classList.remove('jumpAnim');
        },750);
    }else{
        initialization();
    }
});

function initialization(){
    gameRunning = true;
    score = 0;
    document.querySelector('.game__box h2').innerText = "";
    document.querySelector('.obstacle').classList.add('obstacleAnim');
    document.querySelector('.player').classList.remove('jumpAnim');
    document.querySelector('.player').style.top = '280px';
    document.querySelector('.obstacle').style.left = '95vw';
    let scoreCounter = setInterval( () => {
        if(gameRunning){
            score++;
            document.querySelector('.score').innerText = `Score: ${score}`;
        }else{
            document.querySelector('.score').innerText = `Score: ${score}`;
        }
    },500);
}

let  checkCollision = setInterval( () => {
    let characterPosTop = parseInt(window.getComputedStyle(document.querySelector('.player')).getPropertyValue('top'));
    let obstaclePosLeft = parseInt(window.getComputedStyle(document.querySelector('.obstacle')).getPropertyValue('left'));
    
    
    if(obstaclePosLeft > 10 && obstaclePosLeft < 40 && characterPosTop >= 230){
        if(gameRunning){
            document.querySelector('.obstacle').classList.remove('obstacleAnim');
            document.querySelector('.player').classList.remove('jumpAnim');
            document.querySelector('.player').style.top = `${characterPosTop}px`;
            document.querySelector('.obstacle').style.left = `${obstaclePosLeft}px`;
            document.querySelector('.game__box h2').innerHTML = 'Game Over!<br>Click anywhere to start again.';
            gameRunning = false;
            clearInterval(scoreCounter);
        }
    }else if(obstaclePosLeft < 0){
        let randomNo = Math.floor(Math.random()*4);
        document.querySelector('.obstacle').style.backgroundColor = colorsArr[randomNo];
    }
}, 10);