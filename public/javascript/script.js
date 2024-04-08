const musik = document.getElementById('audio');

function Nyalamusic() {
    const audio = new Audio("../public/assets/audio/audio.mp3");
    audio.loop = true;
    audio.play();
    musik.removeEventListener("click", Nyalamusic);
}
musik.addEventListener("click", Nyalamusic);
