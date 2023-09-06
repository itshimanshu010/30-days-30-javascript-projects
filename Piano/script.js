const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys= [], audio = new Audio("a.wav");

const playTune = (key) => {
    audio.src = `${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key=${key}]`);
    clickedkey.classList.add("active");

    setTimeout(() => {
        clickedkey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});


const handleVolume = (e) => {
    audio.volume= e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key =>key.classList.toggle("hide"));
}


const pressedKey = (e) => {
   if(allKeys.includes(e.key)) playTune(e.key);
}
keysCheckbox.addEventListener("click", showHideKeys);

volumeSlider.addEventListener("input", handleVolume);

document.addEventListener("keydown",pressedKey);

