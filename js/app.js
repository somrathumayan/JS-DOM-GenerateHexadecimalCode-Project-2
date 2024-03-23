// Project requirement
// change the background color randomly by clicking button 

// steps 


// step 1 - create onload handler

window.onload = () => {
    main();

}

function main(){
    const root = document.getElementById("root"); //root ke dhore nilam
    const btn = document.getElementById("change-btn"); //button ke dhore nilam

    btn.addEventListener("click", function(){
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    });
}



// step 2 - random color generator function 
function generateRGBColor(){
    // rgb(0,0,0) to rgb(255,255,255) 
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event 