var paused = true;
var timeout = false;
var id = 0;

function start(){
  const seconds = document.getElementById("pointer");
  seconds.className = "seconds";

  const minutes = document.getElementById("pointer_m");
  minutes.className = "minutes";

  if(paused){
    document.getElementById("start-btn").innerHTML = "Pause";
    paused = false;

    id = setInterval(function(){
        const timer = document.getElementById("current-time");

        //var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        if(!paused && !timeout){
          var minutes = parseInt(timer.innerHTML[0]);
          var seconds = timer.innerHTML[2]+timer.innerHTML[3];

          if (parseInt(seconds) < 9)
            seconds = "0" + String(parseInt(seconds[1]) + 1);
          else
            seconds = parseInt(seconds)+1;

          if(seconds == 59){
            minutes = minutes + 1;
            seconds = "00";
          }
          if(minutes < 25)
            timer.innerHTML = minutes + ":" + seconds;
          else {
            timer.innerHTML = "0:00";
            timeout = true;
          }
        }
    },1000);
  }else{
    document.getElementById("start-btn").innerHTML = "Continue";
    paused = true;
    clearInterval(id);
  }
}
