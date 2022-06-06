const car = document.getElementById("car");
const police = document.getElementById("police");

document.addEventListener("keydown", function(event){
    jump();
})
function jump() {
   if (car.classList != "jump") {
       car.classList.add("jump")
   }
   setTimeout(function() {
    car.classList.remove("jump")
   }, 300)
}

let isAlive = setInterval (function() {
    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue("top"));
    let policeLeft = parseInt(window.getComputedStyle(police).getPropertyValue("left"));

    if (policeLeft < 50 && policeLeft > 0 && carTop >=140) {
        alert("ШТРАФ")
    }
}, 10)