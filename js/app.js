//The user hovers their mouse over an element
function characterChange() {
    imgElement.style.width = "450px";
    imgElement.style.transform = "rotate(360deg)";
    imgElement.style.transition = "width 2s, height 2s, transform 4s";
}
var imgElement = document.getElementById("peppaPig");
imgElement.addEventListener("mouseover", characterChange);

function injectImage() {
    var img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/83/75/89/8375896031985fd071cd6823d19c3639.png";
    document.getElementById("character2").appendChild(img);
}

var titleElement = document.getElementById("george");
titleElement.addEventListener("mouseover", injectImage);

//The user clicks an element
function colorChange() {
    hElement.style.color = "red";
    hElement.style.fontSize = "2rem";
    hElement.style.textAlign = "center";
} 
var hElement = document.getElementById("title");
hElement.addEventListener("click", colorChange);

//The user presses the space key on their keyboard
var bodyElement = document.getElementById("body");
bodyElement.addEventListener("keypress", function(eventDetails) {
    console.log(eventDetails);
    if(eventDetails.key == " ") {
        bodyElement.style.backgroundColor = "lightblue";
    }
});

//application of setInterval and clearInterval
var pElement = document.getElementById("description");
pElement.style.color = "red";
var i = 0;
var altInterval = setInterval(function() {
    i++;
    console.log(i);
    if(i == 50) {
        clearInterval(altInterval);
    } else {
        console.log(pElement.style.color);
        if(pElement.style.color === "red") {
            pElement.style.color = "purple";
        } else if(pElement.style.color === "purple") {
            pElement.style.color = "blue";
        } else if( pElement.style.color === "blue") {
            pElement.style.color = "red";
        }
    }
}, 100);


