
var dict={}
dict['photo']='https://www.youtube.com/embed/ndtQ6ReXO-s?enablejsapi=1&controls=0&autoplay=1&html5=1';
dict['music']='https://www.youtube.com/embed/gGdGFtwCNBE?enablejsapi=1&controls=0&autoplay=1&html5=1';
dict['writing']='https://www.youtube.com/embed/eYiDIeSk3Go?enablejsapi=1&controls=0&autoplay=1&html5=1';
dict['baseball']='https://www.youtube.com/embed/C2EnB6ldpVo?enablejsapi=1&controls=0&autoplay=1&html5=1';
dict['wrestling']='https://www.youtube.com/embed/1uBPOu3si5w?enablejsapi=1&controls=0&autoplay=1&html5=1';
dict['lang']='https://www.youtube.com/embed/bY3Fhm9oTyI?enablejsapi=1&controls=0&autoplay=1&html5=1';
dict['movie']='https://www.youtube.com/embed/cTE7k6Toe3M?enablejsapi=1&controls=0&autoplay=1&html5=1';

function Play(x)
      {
        
        var audiolink = dict[x];
        
        document.getElementById("albumimg").src=audiolink;
        
        
        //if(myAudio.paused) {
        //    myAudio.play();
        //}
        //else {
        //   myAudio.pause();
        //}
      }


//let audio = document.getElementsByTagName('audio');

//let volume = document.querySelector("#volume-control");
//volume.addEventListener("change", function(e) {
//audio.volume = e.currentTarget.value / 100;
//})


// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('albumimg', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}


function onPlayerReady(event) {

    // bind events
    var playButton = document.getElementById("fa-play");
    playButton.addEventListener("click", function() {
          if(YT.PlayerState.PLAYING) {
                player.pauseVideo();
          } else {
                player.playVideo();
          }
        
    });


}



