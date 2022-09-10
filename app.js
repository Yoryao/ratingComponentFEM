console.log("app working")


let selectBtn = 0;


function paintOrange(id){         
      let activeBtn = document.getElementById(id);
    activeBtn.classList.add("paintOrange")


    selectBtn = activeBtn.innerText;

    // let btn = document.getElementsByClassName("card__name");
    // console.log(btn);
    // btn.classList.add("paintOrange");
    
    
    // btn.classList.add("card");

    // let activeBtn = document.getElementById(id);
    // activeBtn.classList.add("paintOrange");

    console.log("boton elegido :" + selectBtn);

}


