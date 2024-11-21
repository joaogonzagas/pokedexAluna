document.addEventListener("DOMContentLoaded", function() {
    const cover = document.querySelector(".cover"); 
    const clickSound = document.getElementById("clickSound");  

   
    cover.addEventListener("click", function(event) {
       
        event.stopPropagation();


        cover.classList.toggle("open");

        clickSound.play();
        clickSound.currentTime = 0;
    });
});
