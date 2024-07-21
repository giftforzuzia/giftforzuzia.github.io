onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    let btn = document.getElementById("play-button");
    let playing = false;
    let audio = new Audio("audio.mp3");

    btn.addEventListener("click", () => {
        if (playing === false) {
            audio.play();
            audio.loop = true;
            playing = true;
        }
        else {
            audio.pause();
            playing = false;
        }
        btn.classList.toggle("paused");
    });
};