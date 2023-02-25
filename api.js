var nameFound = false;

var playerID;
var playerScore;

function postScore() {
    setTimeout(getPlayer, 1000);
    setTimeout(postNewPlayerScore, 2000);
    
    getPlayer(publicList[userInput - 2]);
}

async function postNewPlayer(edit) {
    let newPlayer = {
        "name": document.getElementById("scoreName").value,
    };
    let response = fetch(`${edit}/player/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
        },
        body: JSON.stringify(newPlayer)
    });
    
    console.log(await response);
    getPlayer(publicList[userInput - 2]);
}

async function getPlayer(public) {
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
                postNewPlayerScore(editList[userInput - 2]);
            } else {
                if(data.players[i].score > score) {
                    postRefreshPlayerScore(editList[userInput - 2]);
                    postNewPlayerScore(editList[userInput - 2]);
                } else {
                    console.log("No new high score!")
                }
            }
        }
    }

    if(nameFound == false) {
        postNewPlayer(editList[userInput - 2]);
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



  function gridSizeLeaderBoards() {
    if(userInput == 2) {

    }
  }