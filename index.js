function getWordPos(word, text) {

    // TODO: REPLACE ME WITH SOLUTION
    let regexStr = new RegExp("\\b"+word+"\\b","");
    let result = text.search(regexStr);
    return result;  
    /** Second approach */
    // for(let i=0; i<text.length; i++) {
    //     if(i>1 && i<text.length -2){
    //         let subStr = text[i-1] +text[i] + text[i+1] +text[i+2];
    //         if(subStr.trim() == word){
    //             console.log("Index = ", i);
    //             break;
    //         }else{
    //             if(text.indexOf(word) == -1){
    //                 console.log("Index =" ,-1);
    //                 break;
    //             }
                
    //         }
    //     }
    // }

};
// /** Input Parameter */
// let word="is";
// let text= "this is a string";
// let outputResult =getWordPos(word, text);
// console.log(outputResult)
module.exports = getWordPos;