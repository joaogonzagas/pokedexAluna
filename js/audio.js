document.addEventListener("DOMContentLoaded", () => {
    const audioButton = document.getElementById("audioButton");
    const audioPlayer = document.getElementById("audioPlayer");

    let isPlaying = false; 

    audioButton.addEventListener("click", () => {
        if (isPlaying) {
            audioPlayer.pause();
            audioButton.classList.remove("clicked"); 
        } else {
            audioPlayer.play(); 
            audioButton.classList.add("clicked"); 
        }

        isPlaying = !isPlaying; 
    });
});
