function encurtarUrl() {
    //validar se o link existe
    let url = document.getElementById("input-url").value;
    if (!url) {
        alert("É preciso inserir uma URL para encurtar");
        return;
    }

    //api key:fbcb87a09f0f4ace9c4a84c943549e0e

    //headers
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "fbcb87a09f0f4ace9c4a84c943549e0e"
    }

    let linkRequest = {
        destination: url, 
        domain: {fullname: "rebrand.ly"}
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(reponse => reponse.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}

function copiarUrl() {
    let inputUrl = document.getElementById("input-url");

    inputUrl.select();   
    inputUrl.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(inputUrl.value);

    alert(`URL copiada:' ${inputUrl.value}`)
}