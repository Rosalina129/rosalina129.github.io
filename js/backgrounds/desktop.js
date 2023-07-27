var site_background = [
    ['https://static.zerochan.net/Collei.full.3940356.jpg','top center'],
    ['https://static.zerochan.net/Collei.full.3701452.jpg','top center'],
    ['https://static.zerochan.net/Collei.full.3949550.jpg','top center'],
    ['https://static.zerochan.net/Collei.full.3887960.jpg','top center']
]
var a = Math.floor(Math.random()*4);
document.body.style.backgroundImage = "url("+ site_background[a][0] +")";
document.body.style.backgroundPosition = site_background[a][1];