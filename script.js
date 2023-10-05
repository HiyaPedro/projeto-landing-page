/*Hamburger menu onclick function*/
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}


/*Clear input textfields onclick function*/
const clearInput = (event) => {
    document.getElementById("full-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("number").value = "";
    
    let checkbox = document.getElementById("terms-and-conditions");
        if(checkbox.checked){
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup")
}
let popup = document.getElementById("popup");
const closePopup = (event) => {
    popup.classList.remove("open-popup");
}

/*change box-1 colour with onclick "Press Me" navbar button*/
const button = document.getElementById("click");
const box = document.getElementById("purple");
const colors=['violet', 'red', 'green', 'pink', 'black', 'yellow'];

box.style.backgroundColor='violet';

button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    box.style.backgroundColor=colors[colorIndex];
})