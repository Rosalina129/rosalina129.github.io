var jsonData;
if (window.XMLHttpRequest) {
    jsonData = new XMLHttpRequest()
} else if (window.ActiveXObject) {
    jsonData = new window.ActiveXObject();
} else {
    console.log("Failed to get Data.")
}
var CardQuery = [document.querySelector('#cm-pc-genshin'),document.querySelector('#cm-pc-sm64b')];
getJson(jsonData)
function getJson(json) {
    if (json != null) {
        json.open("GET","resource/json/all.json",true);
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

function cardStruct(id,title,describe,siteurl,islight,bimage) {
    var colormode,background_url;
    if (islight) colormode = "light"
    else colormode = ""
    if (bimage != "") background_url = 'style="background:url('+ bimage+')"'
    var abuttons = atag(siteurl);
    return '<div class="mdl-card mdl-shadow--4dp" id="' + 
    id + '"><div class="mdl-card__title mdl-card--expand"'+
    background_url +'><div class="card-included-image"><p class="mdl-card__title-text" style="font-size: 1.5em;">' + 
    title+ '</p></div></div><div class="mdl-card__supporting-text"><p>' + 
    describe+ '</p></div><div class="mdl-card__actions mdl-card--border">'+
    abuttons +'</div></div>'
}

function atag(url) {
    var p = [
        '<a href="',
        '" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">',
        '</a>'
    ]
    var result = '';
    for (var a = 0;a < url.length; a++) {
        result += p[0] + url[a][0] + p[1] + url[a][1] + p[2]
    }
    return result
}

function DeparseData(json) {
    var type = json.type
    var id = json.id
    var name = json.name
    var describe = json.describe
    var url = json.urls
    var islight = json.islight
    var bg = json.cbg_source
    return {type,id,name,describe,url,islight,bg}
}

function insertData(json) {
    for (var i = 0; i < json.length; i++) {
        a = DeparseData(JSON.parse(json)[i])
        if (a.type == "genshin") {
            CardQuery[0].innerHTML += cardStruct(a.id,a.name,a.describe,a.url,a.islight,a.bg)
        } else if (a.type == "supermario64Blooper") {
            CardQuery[1].innerHTML += cardStruct(a.id,a.name,a.describe,a.url,a.islight,a.bg)
        }
    }
}