console.log("app working");

let rating = 0;

function paintOrange(id) {
  let btns = document.getElementsByClassName("card__number");

  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("paintOrange");
  }

  let activeBtn = document.getElementById(id);
  activeBtn.classList.add("paintOrange");
  rating = activeBtn.innerText;

}

function sendRating () {
    console.log("el rating fue: " + rating)

    let ratingInfo = document.getElementById("ratingInfo");
    ratingInfo.innerText = "You selected " + rating + " out of 5";

    hideCard();

}

function hideCard (){
  let firstCard = document.getElementById("firstCard");
  let secondCard = document.getElementById("secondCard")
  firstCard.classList.add("hide")
  secondCard.classList.remove("hide")


}