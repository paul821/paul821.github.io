
var dict={}
dict['photo']='spotifyaudio/photo.mp3';
dict['music']='spotifyaudio/music.mp3';
dict['writing']='spotifyaudio/writing.mp3';
dict['baseball']='spotifyaudio/baseball.mp3';
dict['wrestling']='spotifyaudio/wrestling.mp3';
dict['lang']='spotifyaudio/lang.mp3';
dict['movie']='spotifyaudio/movie.mp3';

var vid = {}
vid['photo']='https://www.youtube.com/embed/i1l9VeVDkhE?controls=1&autoplay=1&mute=1';
vid['music']='https://www.youtube.com/embed/gGdGFtwCNBE?controls=1&autoplay=1&mute=1';
vid['writing']='https://www.youtube.com/embed/eYiDIeSk3Go?controls=1&autoplay=1&mute=1';
vid['baseball']='https://www.youtube.com/embed/EmTJVTTCg6k?controls=1&autoplay=1&mute=1';
vid['wrestling']='https://www.youtube.com/embed/bh9197p2-rc?controls=1&autoplay=1&mute=1';
vid['lang']='https://www.youtube.com/embed/_KzHGbpxMOY?controls=1&autoplay=1&mute=1';
vid['movie']='https://www.youtube.com/embed/FqAjVAf5fNA?controls=1&autoplay=1&mute=1';

var title={}//songtitle
title['photo']='Family Picture 가족사진';
title['music']='Mr. Brightside';
title['writing']='Like Rain Like Music';
title['baseball']='Apartment 아파트';
title['wrestling']='Warriors';
title['lang']='California (feat. Warren Hue)';
title['movie']='Protagonist 주인공';


var artist={} //songartist
artist['photo']='Kim Jin Ho 김진호';
artist['music']='The Killers';
artist['writing']='Kim Hyunshik 김현식';
artist['baseball']='Yoon Soo-Il 윤수일';
artist['wrestling']='Imagine Dragons';
artist['lang']='88rising, Rich Brian, NIKI, Warren Hue';
artist['movie']='BewhY 비와이';

var track=document.getElementById("bgm"); 

function Play(x)
{
    var audiolink = dict[x];
    var videolink = vid[x];
    var songtitle = title[x];
    var songartist = artist[x];
    
    document.getElementById("albumimg").src=videolink;
    
    track.src=audiolink;
    track.autoplay=true;
    
    document.getElementById("songtitle").innerText=songtitle;
    document.getElementById("songartist").innerText=songartist;
}


var playButton = document.getElementById("fa-play");    

playButton.addEventListener('click', function() {
  if (track.paused) {
    track.play();
    playButton.style.color="#b9b5b5";
  } else {
    track.pause();
    playButton.style.color="#fff";
  }
});



var repeatButton = document.getElementById("fa-repeat");
repeatButton.addEventListener('click',function() {
  if (track.loop==false){
      //make loop true
    //track.addEventListener('ended', function() {
    //    this.currentTime = 0;
    //    this.play();
    //});
      track.loop=true;
    repeatButton.style.color="#fff";
  } else {
      //make loop false
    //track.addEventListener('ended', function() {
    //    this.pause();
    //});
      track.loop=false;
    repeatButton.style.color="#b9b5b5";
  }
});

var leftButton = document.getElementById("fa-left");
leftButton.addEventListener('click',function() {
  track.currentTime=0;
  track.play();
});

var rightButton = document.getElementById("fa-right");
rightButton.addEventListener('click',function() {
  var time = track.duration;
  track.currentTime=time*0.9;
  track.play();
});



let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
    track.volume = e.currentTarget.value / 100;
    
    var value=e.currentTarget.value;
    volume.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' + value + '%, #808080 ' + value + '%, #808080 100%)';
})


document.getElementById("volume-control").onmouseover = function() {
  var value = volume.value;
  volume.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' + value + '%, #808080 ' + value + '%, #808080 100%)';
};

document.getElementById("volume-control").oninput = function() {
  var value = volume.value;
  volume.style.background = 'linear-gradient(to right, #1DB954 0%, #1DB954 ' + value + '%, #808080 ' + value + '%, #808080 100%)';
};

document.getElementById("volume-control").onmouseout = function() {
  var value = volume.value;
  volume.style.background = 'linear-gradient(to right, #b9b5b5 0%, #b9b5b5 ' + value + '%, #808080 ' + value + '%, #808080 100%)';
};


