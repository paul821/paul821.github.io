
var dict={}
dict['photo']='spotifyaudio/photo.mp3';
dict['music']='spotifyaudio/music.mp3';
dict['writing']='spotifyaudio/writing.mp3';
dict['baseball']='spotifyaudio/baseball.mp3';
dict['wrestling']='spotifyaudio/wrestling.mp3';
dict['lang']='spotifyaudio/lang.mp3';
dict['movie']='spotifyaudio/movie.mp3';

var vid = {}
vid['photo']='https://www.youtube.com/watch?v=i1l9VeVDkhE';
vid['music']='https://www.youtube.com/watch?v=gGdGFtwCNBE';
vid['writing']='https://www.youtube.com/watch?v=eYiDIeSk3Go';
vid['baseball']='https://www.youtube.com/watch?v=EmTJVTTCg6k';
vid['wrestling']='https://www.youtube.com/watch?v=bh9197p2-rc';
vid['lang']='https://www.youtube.com/watch?v=_KzHGbpxMOY';
vid['movie']='https://www.youtube.com/watch?v=FqAjVAf5fNA';


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



let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
track.volume = e.currentTarget.value / 100;
})




