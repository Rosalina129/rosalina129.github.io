function cardData (id,title,describe,siteurl,version){
    this.id = id
    this.title = title
    this.describe = describe
    this.siteurl = siteurl
    this.version = this.version
    return [this.id,this.title,this.describe,this.siteurl,this.version,this]
};
var cardAllData = [
    new cardData(
        "yave-tours",
        "Yave's Tours",
        'In this WinForms, you will play as a person named "Yave Yu" and upgrade through AFK! <br />Latest: v0.0.1',
        new URL('https://github.com/Rosalina129/Yave'),
        'Not Released'
    )
]
var cardStruct = '<div class="mdl-card mdl-shadow--4dp"><div class="mdl-card__title mdl-card--expand light"><p class="mdl-card__title-text" style="font-size: 1.5em;"></p></div><div class="mdl-card__supporting-text"></div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"></a><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"></a></div></div>'

console.log(cardAllData)

const octokit = new Octokit({});
await octokit.request("get /octocat", {});
