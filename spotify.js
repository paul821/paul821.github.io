
var dict={}
dict['photo']='https://www.youtube.com/watch?v=ndtQ6ReXO-s';
dict['music']='https://www.youtube.com/watch?v=gGdGFtwCNBE';
dict['writing']='https://www.youtube.com/watch?v=eYiDIeSk3Go';
dict['baseball']='https://www.youtube.com/watch?v=C2EnB6ldpVo';
dict['wrestling']='https://www.youtube.com/watch?v=1uBPOu3si5w';
dict['lang']='https://www.youtube.com/watch?v=bY3Fhm9oTyI';
dict['movie']='https://www.youtube.com/watch?v=cTE7k6Toe3M';

function Play(x)
      {
        var audiolink = dict[x];
        var myAudio = document.createElement('audio');
        document.body.appendChild(myAudio);
        myAudio.src=audiolink;
        myAudio.play();
        
        
        //if(myAudio.paused) {
        //    myAudio.play();
        //}
        //else {
        //   myAudio.pause();
        //}
      }


let audio = document.getElementsByTagName('audio');

let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})



function playpause() {
  myAudio = document.getElementsByTagName('audio');
    if(myAudio.paused) {
            myAudio.play();
        }
        else {
           myAudio.pause();
        }
}

