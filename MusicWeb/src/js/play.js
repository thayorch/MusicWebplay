var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
    
        if(!icon.onclick){
                mySong.play();             //pause == หยุดตอนนั้นๆ
                icon.src= "src/img/pause.png";
        }

    icon.onclick = function(){

        if (mySong.paused) {            //paused == หยุดไปแล้ว
            mySong.play();
            icon.src= "src/img/pause.png";
        }
        else{
            mySong.pause();             //pause == หยุดตอนนั้นๆ
            icon.src= "src/img/play.png";
        }

    }

       