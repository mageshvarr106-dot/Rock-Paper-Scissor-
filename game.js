let score = JSON.parse(localStorage.getItem('score')) || {won: 0, loss:0, tie:0};
      updateScoreElement();
      
      let isautoPlaying = false;

      function autoPlay(){
        if(!isautoPlaying){intervalID = setInterval(function(){
        const playerMove = pickcomputerMove();
          playGame(playerMove);
        },1000);
        isautoPlaying = true;
        }else{
          clearInterval(intervalID);
          isautoPlaying = false;
        }
      }





      function playGame(playerMove){
        const computerMove = pickcomputerMove();
        let result = '';
        
        if(playerMove === 'ROCK'){
          if(computerMove === 'ROCK'){
            result = 'TIE';
          }
          else if (computerMove === 'PAPER'){
            result = 'YOU LOSE';
          }
          else if (computerMove === 'SCISSOR'){
            result = 'YOU WON';

          }
        }

        else if(playerMove === 'PAPER'){
          if(computerMove === 'ROCK'){
            result = 'YOU WON';
          }
          else if (computerMove === 'PAPER'){
            result = 'TIE';
          }
          else if (computerMove === 'SCISSOR'){
            result = 'YOU LOSE';

          }
        }

        else if(playerMove === 'SCISSOR'){
          if(computerMove === 'ROCK'){
            result = 'YOU LOSE';
          }
          else if (computerMove === 'PAPER'){
            result = 'YOU WON';
          }
          else if (computerMove === 'SCISSOR'){
            result = 'TIE';

          }
        }
        if(result === 'YOU WON'){
          score.won += 1;
        }
        else if(result === 'YOU LOSE'){
          score.loss += 1;
        }
        else if (result === 'TIE'){
          score.tie += 1;
        }

        localStorage.setItem('score' , JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result')
         .innerHTML = result;

        document.querySelector('.js-move')
         .innerHTML = `You <img class="rock-image"src="gamepic/${playerMove}-emoji.png">
          <img class="rock-image"src="gamepic/${computerMove}-emoji.png"> Computer.`;
      }
 

      function updateScoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.won} Losses: ${score.loss} Ties: ${score.tie}`;

      }
      function pickcomputerMove(){
       const randomNumber = Math.random();
       if(randomNumber > 0 && randomNumber < 1/3){
       computerMove = 'ROCK';
       }
       else if(randomNumber > 1/3 && randomNumber < 2/3){
       computerMove = 'PAPER';
       }
       else if(randomNumber > 2/3 && randomNumber < 1){
       computerMove = 'SCISSOR';
       }
       return computerMove;
      }