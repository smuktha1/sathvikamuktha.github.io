document.addEventListener('DOMContentLoaded', function() {
    var currentTimeElement = document.getElementById('current-time');
    var currentDate = new Date();
    currentTimeElement.textContent = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
                                    ' on ' + currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('user-info').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var mood = document.getElementById('mood').value;
        document.getElementById('greeting').textContent = "Hello " + name + "!! Sagacious Mermaid welcomes you!! We're glad you are doing " + mood + " today!";
    });
});

function showPolygonName() {
    const numberInput = document.getElementById('favorite-number').value;
    const absoluteNumber = Math.abs(parseInt(numberInput));
    const polygonNames = ['Henagon','Digon','Trigon','Tetragon','Pentagon','Hexagon','Heptagon','Octagon','Nonagon','Decagon'];
    const polygonName = (absoluteNumber < 11) ? polygonNames[absoluteNumber-1] : 'Invalid Input';
    alert('The name of the polygon with ' + absoluteNumber + ' sides is ' + polygonName);
}
function mermaid(){
    let mermaid = document.getElementById("mermaid").value;
    if(mermaid === "yes"){
        let answerMermaid = "A mermaid is an aquatic creature with the head and upper body of a female human and the tail of a fish.";
        document.getElementById("answerMermaid").innerHTML = answerMermaid; 
    }
    else if (mermaid === "no") {
        let answerMermaid = "While there is no evidence that mermaids exist outside folklore, reports of mermaid sightings continue to the present day";
        document.getElementById("answerMermaid").innerHTML = answerMermaid; 
    } else {
        let answerMermaid = "Please answer with 'yes' or 'no'.";
        document.getElementById("answerMermaid").innerHTML = answerMermaid; 
    }
}

function generateCompliment() {
    const c = ["Your positivity is infectious; you have a way of brightening everyone's day!!",
    "Just like a mermaid's enchanting allure, your presence captivates everyone around you!!",
    "Your kindness and compassion flow as freely as the ocean waves that cradle a mermaid's home",
    "Your radiant beauty rivals that of a mermaid basking in the shimmering light of the sea!!",
    "Like a mermaid's mystical charm, your inner strength and resilience are as deep as the ocean itself"];
    const randomC = c[Math.floor(Math.random() * c.length)];
    alert("Compliment: " + randomC);
}

function randomFact() {
    document.getElementById("randomFact").innerText = "A shrimp's heart is in its head.";
}

function randomMermaidFact() {
    document.getElementById("randomMermaidFact").innerText = "Being a magical creature, mermaids are often depicted as having magical powers. Magic powers allow one to manipulate the elements and defy the laws of physics. There are all kinds of magic powers: Mind-reading, flying, invisibility, shapeshifting, controlling nature, and many more.";
}

function sayGoodbye() {
    document.getElementById("goodBye").innerText = "Adios! Thanks for visiting Sagacious Mermaid.";
}

