const startGameBtn = document.getElementById('start-game-btn');
//Constants:-

const stone='stone';
const paper='paper';
const scissor='scissor';
const draw='Draw';
const player_wins="Player Wins";
const computer_wins="Computer Wins";
const default_val=stone;





let gameStarted=false;


//player choice:-
const choice = function(){
    const choicePlayer=prompt('select stone,paper,scissor?','').toLowerCase();
    if(choicePlayer !== stone && choicePlayer !== paper && choicePlayer !== scissor){
        alert('sry wrong choice we\'ll choose stone for u');
        return stone;
    }
    return choicePlayer;
}

// computer choice
const computerChoice=function(){
    let choice=Math.floor(Math.random()*3);
    if(choice===0){
        return stone;
    }
    else if(choice===1){
        return paper;
    }
    else{
        return scissor;
    }

    //console.log(choice);
}

// decider function:-
const decider=function(pChoice,cChoice){
    if(pChoice===cChoice){
        return draw
    }
    else if(pChoice===stone && cChoice===scissor 
        || pChoice===paper && cChoice===stone 
        || pChoice===scissor && cChoice===paper){
        return player_wins;
    }
    else{
        return computer_wins;
    }
}

// main function:-
startGameBtn.addEventListener('click',function(){
    if(gameStarted){
        return;
    }   
    gameStarted=true;
    
    const pChoice=choice();
    const cChoice=computerChoice();
    
    let message= `Ur choice ${pChoice}, Computer choice ${cChoice}`;
    const winOrLoss=decider(pChoice,cChoice);
    if(winOrLoss === draw){
        message+=' and it\'s a draw';    
    }
    else if(winOrLoss === player_wins){
        message+=' and player won the game';
    }
    else{
        message+=' and computer won the game';
    }
    console.log(message);
})



/*
Checking some functionalities:-

const addFun = (result,operation,...numbers) => {
    let sum;
    
    console.log(numbers);
    sum=numbers.reduce((previous,current,index,arr) => {
       if(operation==='ADD'){
        return parseInt(previous+current);
       }
       else{
        return (previous-current);
       }
       
       
        
    })
    
    
    result(sum);

};

const showResult=(message,sum)=>{
    alert(message+sum);
}

addFun(showResult.bind(this,"sum is: "),'ADD',1,2,9,10);
addFun(showResult.bind(this,"sub is: "),'SUB',2,5,10,2);
*/