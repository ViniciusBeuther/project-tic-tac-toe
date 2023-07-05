//====================================================================
//GLOBAL - Set assign / restart buttons
const btnGetNames = document.getElementById('assign-names')
const btnRestartGame = document.getElementById('restartGame')
const tableElements = document.querySelectorAll('.elements-box')
let restartFlag = 0
let playerTurn = 0
let gameStartFlag = 0
let winsCountPlayer1 = 0
let winsCountPlayer2 = 0
//====================================================================

//FUNCTIONS ==========================================================
function clearInput(){
    const player1FullnameInput = document.getElementById('player1-name')
    const player2FullnameInput = document.getElementById('player2-name')
    player1FullnameInput.disabled = 'True'
    player2FullnameInput.disabled = 'True'
}

function restartGame(){
    const player1Fullname = document.getElementById('player1-name').value = ''
    const player2Fullname = document.getElementById('player2-name').value = ''
    const player1FullnameInput = document.getElementById('player1-name')
    const player2FullnameInput = document.getElementById('player2-name')
    player1FullnameInput.disabled = ''
    player2FullnameInput.disabled = ''
    alert('=====Restarted=====')
    restartFlag = 0
}

function setAtribute(){
if (gameStartFlag == 1)
{
    const parentNode = document.getElementById('table-frame')
    const element = event.currentTarget
    element.style.pointerEvents = 'none'
    setTimeout(checkWinner(parentNode,element),2000)
}

    else{
        alert('Error, add the players first')
    }
}

function checkWinner(mainParentNode, element)   //Conditionals to win
{
    const turnDiv = document.getElementById('player-turn')
    const player2Fullname = document.getElementById('player2-name').value
    const player1Fullname = document.getElementById('player1-name').value

    if (playerTurn % 2 === 0)   //Round player 1
    {
        element.innerText = 'X'   
        turnDiv.innerText = `Player turn: ${player2Fullname}`
    }
    else 
    {
        element.innerText = 'O' //Round player 2
        turnDiv.innerText = `Player turn: ${player1Fullname}`
    }
    playerTurn++

    if (mainParentNode.children[0].textContent === 'X' && mainParentNode.children[1].textContent === 'X' && mainParentNode.children[2].textContent === 'X')   //Conditional for the first ROW = X X X | O O O
    {
        for(let i = 0; i < 3; i++){
            mainParentNode.children[i].style.color = 'red';
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }

            alert(`${player1Fullname} WINS!`)
            
    }, 10);
    }

    else if (mainParentNode.children[3].textContent === 'X' && mainParentNode.children[4].textContent === 'X' && mainParentNode.children[5].textContent === 'X')//Conditional for the second ROW 
    {
        for(let i = 3; i < 6; i++){
            mainParentNode.children[i].style.color = 'red';
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert('Player 01 WINS!');
    }, 200);
    }
    
    else if (mainParentNode.children[6].textContent === 'X' && mainParentNode.children[7].textContent === 'X' && mainParentNode.children[8].textContent === 'X') //Conditional for the third ROW 
    {
        for(let i = 6; i < 9; i++){
            mainParentNode.children[i].style.color = 'red';
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {

                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert('Player 01 WINS!');
    }, 200);
    }

    

    //Vertical align possibilities
    else if (mainParentNode.children[0].textContent === 'X' && mainParentNode.children[3].textContent === 'X' && mainParentNode.children[6].textContent === 'X') //Conditional for the first COLUMN 
    {
        for (let i = 0; i < 9; i = i+3)
        {
            mainParentNode.children[i].style.color = 'red';
        }        

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {

                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert('Player 01 WINS!');
    }, 200);
    }

    else if (mainParentNode.children[1].textContent === 'X' && mainParentNode.children[4].textContent === 'X' && mainParentNode.children[7].textContent === 'X') //Conditional for the second COLUMN 
    {
        for (let i = 1; i < 9; i = i+3)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }        

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {

                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert('Player 01 WINS!');
    }, 200);
    }

    else if (mainParentNode.children[2].textContent === 'X' && mainParentNode.children[5].textContent === 'X' && mainParentNode.children[8].textContent === 'X') //Conditional for the third COLUMN 
    {
        for (let i = 2; i < 9; i = i+3)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }
            alert('Player 01 WINS!');
    }, 200);
    }

    else if (mainParentNode.children[0].textContent === 'X' && mainParentNode.children[4].textContent === 'X' && mainParentNode.children[8].textContent === 'X') //Conditional for the left down to right diagonal 
    {
        for (let i = 0; i < 9; i = i+4)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }
            alert('Player 01 WINS!');
    }, 200);
    }

    else if (mainParentNode.children[2].textContent === 'X' && mainParentNode.children[4].textContent === 'X' && mainParentNode.children[6].textContent === 'X') //Conditional for the right down to left diagonal 
    {
        for (let i = 2; i < 8; i = i+2)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }
            alert('Player 01 WINS!');
    }, 200);
    }


    //Player 2 win conditionals

    if (mainParentNode.children[0].textContent === 'O' && mainParentNode.children[1].textContent === 'O' && mainParentNode.children[2].textContent === 'O')   //Conditional for the first ROW = X X X | O O O
    {
        for(let i = 0; i < 3; i++){
            mainParentNode.children[i].style.color = 'red';
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }

            alert(`${player2Fullname} WINS!`)
            
    }, 10);
    }

    else if (mainParentNode.children[3].textContent === 'O' && mainParentNode.children[4].textContent === 'O' && mainParentNode.children[5].textContent === 'O')//Conditional for the second ROW 
    {
        for(let i = 3; i < 6; i++){
            mainParentNode.children[i].style.color = 'red';
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert(`${player2Fullname} WINS!`)
    }, 200);
    }
    
    else if (mainParentNode.children[6].textContent === 'O' && mainParentNode.children[7].textContent === 'O' && mainParentNode.children[8].textContent === 'O') //Conditional for the third ROW 
    {
        for(let i = 6; i < 9; i++){
            mainParentNode.children[i].style.color = 'red';
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {

                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert(`${player2Fullname} WINS!`)
    }, 200);
    }

    

    //Vertical align possibilities
    else if (mainParentNode.children[0].textContent === 'O' && mainParentNode.children[3].textContent === 'O' && mainParentNode.children[6].textContent === 'O') //Conditional for the first COLUMN 
    {
        for (let i = 0; i < 9; i = i+3)
        {
            mainParentNode.children[i].style.color = 'red';
        }        

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {

                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert(`${player2Fullname} WINS!`)
    }, 200);
    }

    else if (mainParentNode.children[1].textContent === 'O' && mainParentNode.children[4].textContent === 'O' && mainParentNode.children[7].textContent === 'O') //Conditional for the second COLUMN 
    {
        for (let i = 1; i < 9; i = i+3)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }        

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {

                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                
                playerTurn=0
            }
            alert(`${player2Fullname} WINS!`)
    }, 200);
    }

    else if (mainParentNode.children[2].textContent === 'O' && mainParentNode.children[5].textContent === 'O' && mainParentNode.children[8].textContent === 'O') //Conditional for the third COLUMN 
    {
        for (let i = 2; i < 9; i = i+3)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }
            alert(`${player2Fullname} WINS!`)
    }, 200);
    }

    else if (mainParentNode.children[0].textContent === 'O' && mainParentNode.children[4].textContent === 'O' && mainParentNode.children[8].textContent === 'O') //Conditional for the left down to right diagonal 
    {
        for (let i = 0; i < 9; i = i+4)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }
            alert(`${player2Fullname} WINS!`)
    }, 200);
    }

    else if (mainParentNode.children[2].textContent === 'O' && mainParentNode.children[4].textContent === 'O' && mainParentNode.children[6].textContent === 'O') //Conditional for the right down to left diagonal 
    {
        for (let i = 2; i < 8; i = i+2)
        {
            mainParentNode.children[i].style.color = 'red'; 
        }

        setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                mainParentNode.children[i].style.color = '#383838';
                playerTurn=0
            }
            alert(`${player2Fullname} WINS!`)
    }, 200);
    }



    else {
        let allFilled = true;
        for (let i = 0; i < mainParentNode.children.length; i++) 
        {
          if (mainParentNode.children[i].textContent === '') 
          {
            allFilled = false;
            break;
          }
        }
        
        if (allFilled) 
        {
          alert('Empate');
          setTimeout(function() {
            for (let i = 0; i < mainParentNode.children.length; i++) {
                mainParentNode.children[i].textContent = '';
                mainParentNode.children[i].style.pointerEvents = '';
                playerTurn=0
            }
        }, 200);
        }
    }
}
//Verify if all the children are filled  


//====================================================================

//Events==============================================================
//Get the player 1 name and validate it
btnGetNames.addEventListener('click', function (){  //Get the players name and validate it
    const player1Fullname = document.getElementById('player1-name')
    const player2Fullname = document.getElementById('player2-name')

    if (player1Fullname.value == '' || player2Fullname.value == ''){
        alert('You did not provided a name! Try again...')
    }
    else{
        alert(`======Success======\nPlayer 01 = ${player1Fullname.value}\nPlayer 02 = ${player2Fullname.value}`)
        clearInput()
        restartFlag = 1
        gameStartFlag = 1
        const turnDiv = getElementById('player-turn')
        turnDiv.innerText = `Player turn: ${player1Fullname}`
    }
})

btnRestartGame.addEventListener('click', function (){   //Restart game
    if (restartFlag == 1){
        restartGame()
        gameStartFlag == 0
    }
    else{
        alert('You can not restart...')
    }
})





