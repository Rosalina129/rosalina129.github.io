function cardData (id,title,describe,siteurl,version,islight,bimage){
    this.id = id
    this.title = title
    this.describe = describe
    this.siteurl = siteurl
    this.version = version
    this.islight = islight
    this.bimage = bimage
};
var CardData = [
    [
        new cardData(
            "yave-tours",
            "Yave's Tours",
            '在这个由 C# WinForms 游戏中，您将扮演一个名为 Yave Yu 的人，通过不断的挂机进行升级!',
            new URL('https://github.com/Rosalina129/Yave'),
            'Not Released',
            true,
            ""
        ),
        new cardData(
            "exps",
            "乱码字生成器",
            '由 C# 编写，拿来对文字进行“恶（luan）搞（ma）”吧！',
            new URL('https://github.com/Rosalina129/Exps'),
            'v1.0.1',
            false,
            ""
        )
    ],[
        new cardData(
            "hodgepodge-2",
            "Battle Hodgepodge 2",
            '操控马力欧，打倒一波接着一波的敌人吧！',
            new URL('https://github.com/Rosalina129/hodgepodge2'),
            'v1.0',
            true,
            'images/hodgepodge2.png'
        ),
        new cardData(
            "smbxware",
            "SMBX Ware",
            '在这个特定目标的地方尽可能存活到最后！',
            new URL('https://github.com/Rosalina129/smbxware'),
            'v0.0.1_alpha',
            true,
            'images/smbxware.png'
        ),
        new cardData(
            "greentop",
            "Green Top",
            '在绿地里，操控马力欧收集金币的同时，收集散落在各地的游戏币吧！',
            new URL('https://github.com/Rosalina129/cod_green_top'),
            'v1.0',
            true,
            'images/greentop.png'
        )
    ]
]
function cardStruct(id,title,describe,siteurl,version,islight,bimage) {
    var colormode,background_url;
    if (islight) colormode = "light"
    else colormode = ""
    if (bimage != "") background_url = 'style="background:url('+ bimage+')"'
    return '<div class="mdl-card mdl-shadow--4dp" id="' + 
    id + '"><div class="mdl-card__title mdl-card--expand "'+
    background_url +'><div class="card-included-image"><p class="mdl-card__title-text" style="font-size: 1.5em;">' + 
    title+ '</p></div></div><div class="mdl-card__supporting-text"><p>' + 
    describe+ '</p><p>最新版本: ' + version +'</p></div><div class="mdl-card__actions mdl-card--border"><a href="' + 
    siteurl.href + '/releases' + '" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">下载</a><a href="' + 
    siteurl.href + '"class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">源代码</a></div></div>'
}
var CardQuery = [document.querySelector('.allapp-cards'),document.querySelector('.smbx-content-cards')];
for (var i = 0; i < CardQuery.length; i++) {
    for (var j = 0; j < CardData[i].length; j++) {
        CardQuery[i].innerHTML += cardStruct(
            CardData[i][j].id,
            CardData[i][j].title,
            CardData[i][j].describe,
            CardData[i][j].siteurl,
            CardData[i][j].version,
            CardData[i][j].islight,
            CardData[i][j].bimage
        )
    }
}