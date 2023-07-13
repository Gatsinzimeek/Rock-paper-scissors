//This variable will going to help for showing possible option
			let possible = ['rock','scissor','paper'];
			let result = '';
		//This function for getting computer choice 
		const getComputerChoice = (choosed)=>{
			let computer = choosed[Math.floor(Math.random() * choosed.length)];
			if (computer === 'rock') {
				return 'rock';
			}else if(computer === 'paper'){
				return 'paper';
			}else{
				return 'scissor';
			}
		}


		//This function for playing Game and show you win or lose the game 
		const playGame = (playerSelection, computerSelection)=>{
			if (playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'paper' && computerSelection === 'rock' ||
				playerSelection === 'scissor' && computerSelection === 'paper'
				) {
				return `You Win! ${playerSelection} beats ${computerSelection}`;
			}
			else if (playerSelection === 'rock' && computerSelection === 'paper' ||
					playerSelection === 'scissor' && computerSelection === 'rock' ||
					playerSelection === 'paper' && computerSelection === 'scissor'
					){
				return `You lose! ${computerSelection} beats ${playerSelection}`;
			}else{
				return `it is Tie you made same choice with computer try Again`;
			}

		}	
	
		const helper = () =>{
		const playerchoice = prompt("choose between rock, paper or scissor").toLowerCase();
		const computerchoice = getComputerChoice(possible);	
			return playGame(playerchoice,computerchoice);
		}	
		
		const game = () =>{
			let playerscore = 0;
			let computerscore = 0;
		    for (let i = 1; i <= 5; i++) {
		    	let round = helper();
		    	console.log(`Round ${i}: ${round}`);

				if (round.includes("You Win")) {
					playerscore = playerscore++; 	
				}else if(round.includes("You lose")){
					computerscore = computerscore++;
				}
			}
			if (playerscore > computerscore) {
				console.log('You win the game');
			}else if(computerscore > playerscore){
				console.log('You lose the game computer Win');
			}else{
				console.log("it tie many time These no win Today");
			}
		}
		game();
