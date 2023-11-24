var character = document.getElementById("character");
var block = document.getElementById("block");

document.addEventListener("click", ()=>{
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500)
})

//arrow and anonymous function bodies.
//both can be inter changed, only the syntax differs

//function to return pixel values of html elements/objects

var checkIfOut = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 131){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over!");
    }
}, 10);

