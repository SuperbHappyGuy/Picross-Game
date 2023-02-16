var tempBtn = 0;

async function callAPI() {
    tempBtn++;

    // https://keepthescore.co/board/pbetkdyruye/
    let editId = 'cdbusybllie';
    let publicId = 'igwfgfibper';

    let publicurl = 'https://keepthescore.co/board/igwfgfibper/'
    let editurl = 'https://keepthescore.co/api/cdbusybllie'
    
    let newPlayer = {
        "name": "New guy 2"
    };
    let response = fetch(`${editurl}/player/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*',
        },
        body: JSON.stringify(newPlayer)
    });
    
    console.log(await response.json());
    document.getElementById("Start").innerHTML = tempBtn;
}

callAPI();
