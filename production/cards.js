var jsonData;
if (window.XMLHttpRequest) {
    jsonData = new XMLHttpRequest()
} else if (window.ActiveXObject) {
    jsonData = new window.ActiveXObject();
} else {
    console.log("Failed to get Data.")
}
var CardQuery = [
    document.querySelector('#allapp-cards'),
    document.querySelector('#smbx-content-cards')
];
getJson(jsonData)
function getJson(json) {
    if (json != null) {
        json.open("GET","cards.json",true);
        json.send(null);
        json.onreadystatechange = function() {
            if (json.readyState == 4 & json.status == 200) {
                insertData(json.responseText)
                return true;
            } else {
                return false;
            }
        }
    }
}

function cardStruct(id,title,describe,siteurl,version,islight,bimage) {
    var colormode,background_url;
    if (islight) colormode = "light"
    else colormode = ""
    if (bimage != "") background_url = 'style="background:url('+ bimage+')"'
    var abuttons = atag(siteurl);
    return '<div class="mdl-card mdl-shadow--4dp" id="' + 
    id + '"><div class="mdl-card__title mdl-card--expand" '+
    background_url +'><div class="card-included-image"><p class="mdl-card__title-text" style="font-size: 1.5em;">' + 
    title+ '</p></div></div><div class="mdl-card__supporting-text"><p>' + 
    describe+ '</p><p>最新版本: ' +
    version +'</p></div><div class="mdl-card__actions mdl-card--border">'+
    abuttons +'</div></div>'
}

function toCardFormatText(json) {

}

function versionFormat(json) {
    if (json == null) {
        return "Not Released"
    }
    //console.log(json)
    var final = "";
    if (!json.custom) {
        final += "v"
    } else {
        final += json.version
    }
    for (var a = 0; a < json.number.length - 1; a++) {
        final += json.number[a] + "."
    }
    final += json.number[json.number.length-1]
    if (json.betatype != null) {
        switch (json.betatype) {
            case -1:
                final += "_base"
                break
            case 0:
                final += "_alpha"
                break
            case 1:
                final += "_beta"
                break
            case 2:
                final += "_rc"
                break
        }
    }
    if (json.betanumber != null) {            
        final += json.betanumber
    }
    //console.log(final)
    return final
}

function atag(url) {
    var p = [
        '<a href="',
        '" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">',
        '</a>'
    ]
    var result = '';
    if (url[0]) {
        result += p[0] + url[1] + p[1] + "下载" + p[2]
        result += p[0] + url[1] + '/releases' + p[1] + "源代码" + p[2]
    } else {
        for (var a = 0; a < url[1].length; a++) {
            result += p[0] + url[1][a][0] + p[1] + url[1][a][1] + p[2]
        }
    }
    return result
}

function DeparseData(json) {
    var type = json.type
    var id = json.id
    var name = json.name
    var describe = json.describe
    var url = json.urls
    var version = versionFormat(json.versions)
    var islight = json.islight
    var bg = json.cbg_source
    return {type,id,name,describe,url,version,islight,bg}
}

function insertData(json) {
    for (var i = 0; i < json.length; i++) {
        a = DeparseData(JSON.parse(json)[i])
        if (a.type == "software") {
            CardQuery[0].innerHTML += cardStruct(a.id,a.name,a.describe,a.url,a.version,a.islight,a.bg)
        } else if (a.type == "smbx") {
            CardQuery[1].innerHTML += cardStruct(a.id,a.name,a.describe,a.url,a.version,a.islight,a.bg)
        }
    }
    //console.log(a)
}