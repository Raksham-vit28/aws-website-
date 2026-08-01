function showMessage(){

    alert("Welcome! Your website is running successfully on AWS EC2 🚀");

}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseover", () => {

card.style.background = "#2563eb";

});

card.addEventListener("mouseout", () => {

card.style.background = "#1e293b";

});

});