let clicks = 0;

function buttonClicked(){

    let buttonDiv = document.getElementById("button-div");
    clicks++;
    let newText = "Number of times button clicked: " + clicks;
    buttonDiv.innerHTML = newText;
}