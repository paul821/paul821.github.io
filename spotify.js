
const musicLists = document.getElementsByClassName('music__list-item');


for (let i = 0; i < musicLists.length; i++) {
  const bgImage = `url('https://source.unsplash.com/random/300x300?sig=${i}')`;
  musicLists[i].style.backgroundImage = `linear-gradient(
    rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), ${bgImage}`;
  musicLists[i].style.opacity = 0.8;
}


let audio = new Audio("http://21273.live.streamtheworld.com/LOS40_DANCE.mp3");

let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})
