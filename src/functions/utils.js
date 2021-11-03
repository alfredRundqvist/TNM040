function smartSearch(fullWord, substr, depth){
    for (var j = 0; j < fullWord.length; j++){
        var similarity_level = 0;
        for (var i = 0; i < substr.length; i++){
            if (fullWord[j+i] === substr[i]){
                similarity_level++;
            }
        }
        if (similarity_level >= substr.length-depth){
            return true;
        }
    
    }
    return false;
}


export default smartSearch;