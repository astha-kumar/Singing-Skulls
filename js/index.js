context = new AudioContext();
var doSound = context.createOscillator();
//doSound.frequency.value = 280;
doSound.connect(context.destination);
//do.start(0);

$(document).ready(function(){
    $("#do").hover(function(){
      doSound.frequency.value = 262;
        doSound.start(0);
        }, function(){
        doSound.frequency.value = 0;
    });
  $("#re").hover(function(){
      doSound.frequency.value = 294;
        doSound.start(0);
        }, function(){
         doSound.frequency.value = 0;
    });
  $("#me").hover(function(){
      doSound.frequency.value = 330;
        doSound.start(0);
        }, function(){
         doSound.frequency.value = 0;
    });
  $("#fa").hover(function(){
      doSound.frequency.value = 349;
        doSound.start(0);
        }, function(){
         doSound.frequency.value = 0;
    });
  $("#so").hover(function(){
      doSound.frequency.value = 392;
        doSound.start(0);
        }, function(){
         doSound.frequency.value = 0;
    });
  $("#la").hover(function(){
      doSound.frequency.value = 440;
        doSound.start(0);
        }, function(){
         doSound.frequency.value = 0;
    });
  $("#te").hover(function(){
      doSound.frequency.value = 494;
        doSound.start(0);
        }, function(){
         doSound.frequency.value = 0;
    });
  $("#di").hover(function(){
      doSound.frequency.value = 524;
        doSound.start(0);
        }, function(){
         doSound.frequency.value = 0;
    });
});