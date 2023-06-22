function clearInput(){
    const player1Fullname = document.getElementById('player1-name').value = ''
    const player2Fullname = document.getElementById('player2-name').value = ''
}


//Set assign buttons
const player1btn = document.getElementById('btnplayer1')
const player2btn = document.getElementById('btnplayer2')

//Get the player 1 name and validate it
player1btn.addEventListener('click', function (){
    const player1Fullname = document.getElementById('player1-name')

    if (player1Fullname.value == ''){
        alert('You did not provided a name! Try again...')
    }
    else{
        alert('Player 1 added!')
        clearInput()
    }
    
})

//Get the player 2 name and validate it
player2btn.addEventListener('click', function (){
    const player2Fullname = document.getElementById('player2-name')
    
    if (player2Fullname.value == ''){
        alert('You did not provided a name! Try again...')
    }
    else{
        alert('Player 2 added!')
    }
    
})

