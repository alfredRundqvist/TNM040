
function fromUrl(theUrl){

    const urlString = theUrl.replace(/\+/g, " ");// Kan inte ta åäö
  
    return(urlString);
}

export default fromUrl;