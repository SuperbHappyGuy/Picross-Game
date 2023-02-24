let publicurl = 'https://keepthescore.co/api/wgojtsdnqkr'
let editurl = 'https://keepthescore.co/api/vrohqyhlile'

var score = 0;
var nameFound = false;

var playerID;
var playerScore;
var timers;

function postScore() {
    setTimeout(getPlayer, 1000);
    setTimeout(postNewPlayerScore, 2000);
    
    getPlayer();
}

async function postNewPlayer() {
    let newPlayer = {
        "name": document.getElementById("scoreName").value,
    };
    let response = fetch(`${editurl}/player/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
        },
        body: JSON.stringify(newPlayer)
    });
    
    console.log(await response);
    getPlayer();
}

async function getPlayer(public,edit) {
    fetch(`${public}/board/`)
    .then(response => response.json())
    .then(data => {
        
    for(let i = 0; i < data.players.length; i++) {
        if(data.players[i].name == document.getElementById("scoreName").value) {
            console.log("name found");
            playerID = data.players[i].id
            playerScore = data.players.score;
            nameFound = true;

            if(data.players[i].score == 0) {
                postNewPlayerScore
            } else {
                if(data.players[i].score > score) {
                    postRefreshPlayerScore();
                    postNewPlayerScore();
                } else {
                    console.log("No new high score!")
                }
            }
        }
    }

    if(nameFound == false) {
        postNewPlayer();
    }

    nameFound = false;

    console.log(playerID);
    })
    .catch(error => console.error(error));
}

async function postNewPlayerScore(edit) {
    let newScore = {
        "player_id": playerID,
        "score": score,
    };
    let response = fetch(`${edit}/score/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
        },
        body: JSON.stringify(newScore)
    });
    
    console.log(await response);
}

async function postRefreshPlayerScore(edit) {
    let response = fetch(`${edit}/player/${playerID}`, {
        method: 'DELETE',
    });
    
    console.log(await response);
}

function timer() {
    var sec = 0;
    var min = 0;
    var hour = 0;
    timers = setInterval(function(){
      if(sec == 60) {
        sec = 0;
        min++;
      }
      if(min == 60) {
        min = 0;
        hour++;
      }
      document.getElementById('time').innerHTML= hour + ":" + min + ":" + sec;

      if(win == false) {
        sec++;
        score++;
      }
      
    }, 1000);
  }

  function gridSizeLeaderBoards() {
    if(userInput == 2) {

    }
  }