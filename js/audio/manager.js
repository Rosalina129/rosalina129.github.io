var ctx = new (window.AudioContext || window.webkitAudioContext())();
let source = ctx.createBufferSource();
const collei = {
    sounds: [
        '/resource/audio/357_01_cn.ogg',
        '/resource/audio/357_02_cn.ogg',
        '/resource/audio/357_03_cn.ogg'
    ],
    musics:[
        '/resource/audio/Caprice of the Leaves 撷萃漫想.mp3'
    ]
}

// Play
async function playAudio() {
    const audiobuffer = await loadAudio();
    playSound(audiobuffer);
}
// Pause
async function resumeAudio() {
    if (ctx.state === "running") {
        ctx.suspend();
    } else if (ctx.state === "suspended") {
        ctx.resume();
    }
}
// Stop
async function stopAudio() {
    source.stop();
}

async function loadAudio(url) {
    const audioUrl = url;
    const res = await fetch(audioUrl);
    const arrayBuffer = await res.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer, function(decodeData) {
        return decodeData;
    });
    return audioBuffer;
}

async function playSound(audioBuffer) {
    source.buffer = audioBuffer;
    source.loop = false;
    source.connect(ctx.destination);
    source.start(0);
}


shuffleMusicNote()
function randomAudio() {
    loadAudio(collei.sounds[Math.floor(Math.random()*collei.sounds.length)])
    playAudio();
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