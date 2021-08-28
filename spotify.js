
var dict={}
dict['photo']='spotifyaudio/photo.mp3';
dict['music']='spotifyaudio/music.mp3';
dict['writing']='spotifyaudio/writing.mp3';
dict['baseball']='spotifyaudio/baseball.mp3';
dict['wrestling']='spotifyaudio/wrestling.mp3';
dict['lang']='spotifyaudio/lang.mp3';
dict['movie']='spotifyaudio/movie.mp3';


var track=document.getElementById("bgm"); 

function Play(x)
{
    var audiolink = dict[x];
    
    document.getElementById("albumimg").src=audiolink;
    
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



let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
track.volume = e.currentTarget.value / 100;
})




