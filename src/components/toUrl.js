
function toUrl(noneUrl){

    var newUrl = noneUrl.replace(/ /g, "+");

    return(newUrl);
}

export default toUrl;