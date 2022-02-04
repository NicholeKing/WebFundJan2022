// We need to fetch data from an API

async function getFact(){
    // We grab the data from the API
    var response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    // We convert the data into JSON
    var randomFact = await response.json();
    
    console.log(randomFact);
    // We make the data appear on the frontend
    document.getElementById("fact").innerText = randomFact.text;
}

// Call the function...kinda important
getFact();

function getImage() {
    var width = document.querySelector("#width").value;
    console.log(width);
    document.querySelector("#KeanuImage").src = "https://placekeanu.com/" + width;
}