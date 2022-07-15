// function changeImage(){
//     document.getElementById("arrow").src="./images/icon-arrow-up.svg";
// }

function changeImage1(){
    let displayImage = document.getElementById("arrow1")
    if (displayImage.src.match("./images/icon-arrow-up.svg")){
        displayImage.src = "./images/icon-arrow-down.svg"
    }
    else{
        displayImage.src = "./images/icon-arrow-up.svg"
    }

}


function changeImage2(){
    let displayImage = document.getElementById("arrow2")
    if (displayImage.src.match("./images/icon-arrow-up.svg")){
        displayImage.src = "./images/icon-arrow-down.svg"
    }
    else{
        displayImage.src = "./images/icon-arrow-up.svg"
    }

}

function changeImage3(){
    let displayImage = document.getElementById("menu")
    if (displayImage.src.match("./images/icon-close-menu.svg")){
        displayImage.src = "./images/icon-menu.svg"
    }
    else{
        displayImage.src = "./images/icon-close-menu.svg"
    }

}

