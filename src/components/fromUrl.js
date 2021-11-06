
function fromUrl(theUrl){

    var urlString = theUrl.replace(/\+/g, " ");

    return(urlString);
}

export default fromUrl;