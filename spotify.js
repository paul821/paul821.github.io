
var dict={}
dict['photo']='spotifyaudio/photo.mp3';
dict['music']='spotifyaudio/music.mp3';
dict['writing']='spotifyaudio/writing.mp3';
dict['baseball']='spotifyaudio/baseball.mp3';
dict['wrestling']='spotifyaudio/wrestling.mp3';
dict['lang']='spotifyaudio/lang.mp3';
dict['movie']='spotifyaudio/movie.mp3';

var vid = {}
vid['photo']='https://www.youtube.com/embed/i1l9VeVDkhE?controls=0&autoplay=1&mute=1';
vid['music']='https://www.youtube.com/embed/gGdGFtwCNBE?controls=0&autoplay=1&mute=1';
vid['writing']='https://www.youtube.com/embed/eYiDIeSk3Go?controls=0&autoplay=1&mute=1';
vid['baseball']='https://www.youtube.com/embed/EmTJVTTCg6k?controls=0&autoplay=1&mute=1';
vid['wrestling']='https://www.youtube.com/embed/bh9197p2-rc?controls=0&autoplay=1&mute=1';
vid['lang']='https://www.youtube.com/embed/_KzHGbpxMOY?controls=0&autoplay=1&mute=1';
vid['movie']='https://www.youtube.com/embed/FqAjVAf5fNA?controls=0&autoplay=1&mute=1';


var track=document.getElementById("bgm"); 

function Play(x)
{
    var audiolink = dict[x];
    var videolink = vid[x];
    
    document.getElementById("albumimg").src=videolink;
    
    track.src=audiolink;
    track.autoplay=true;
}


var playButton = document.getElementById("fa-play");    

playButton.addEventListener('click', function() {
  if (track.paused) {
    track.play();
  } else {
    track.pause();
  }
});



var repeatButton = document.getElementById("fa-repeat");
repeatButton.addEventListener('click',function() {
  if (track.loop=true){
    track.loop=false;
  } else {
    track.loop=true;
  }
});

var leftButton = document.getElementById("fa-left");
leftButton.addEventListener('click',function() {
  track.currentTime=0;
  track.play();
});



let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
track.volume = e.currentTarget.value / 100;
})




