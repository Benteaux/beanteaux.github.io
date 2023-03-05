//set an image changer

const myImage = document.querySelector('img');


myImage.onclick = function() {
        
    const mySource = myImage.getAttribute('src');
    if(mySource === 'images/bonfire-image.png')
    {
        myImage.setAttribute('src', 'images/omori.png');

    } else{
        myImage.setAttribute('src', 'images/bonfire-image.png');
    }

}

let userButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {

    const myName = prompt("What shall I call you?");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = 'Observe, ' +myName+ ', Bonfires';
        //why didn't ${myName} work?
    }
    


}

if(!localStorage.getItem("name")) {

setUserName();

} else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = 'Observe, ' +storedName+ ', Bonfires';
}

userButton.onclick = () => {
    setUserName();
}

