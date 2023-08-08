var collei = {
    sounds: [
        new Audio('resource/audio/357_01_cn.ogg'),
        new Audio('resource/audio/357_02_cn.ogg'),
        new Audio('resource/audio/357_03_cn.ogg')
    ],
    musics:[
        new Audio('resource/audio/Caprice of the Leaves 撷萃漫想.mp3')
    ]
}

for (var a = 0;a < collei.sounds.length;a++)    collei.sounds[a].volume = 0.35
shuffleMusicNote()
function randomAudio() {
    return collei.sounds[Math.floor(Math.random()*collei.sounds.length)]
}

function playmusic() {
    collei.musics[0].volume = 0.1;
    if (collei.musics[0].paused) {
        collei.musics[0].play();
    } else {
        collei.musics[0].pause();
    }
    console.log('qwq')
}

function shuffleMusicNote() {
    var query = document.getElementById('play-music')
    var deg = 0
    setInterval(function() {
        if (!collei.musics[0].paused) {
            deg += 1
            degtext = deg+'deg'
            query.style.transform = 'rotate(' + degtext + ')'
        }
    },1000/115)
}