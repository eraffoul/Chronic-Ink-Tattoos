export function encryptCaesar(inputString, key) {

    let alphabet_count = 26;
    let ascii_start = 65;
    let ascii_end = alphabet_count+ascii_start;
    key %= alphabet_count;
    var resultString = "";
    for (let i=0; i<inputString.length; i++){
        var ascii_char = inputString[i].charCodeAt();
        ascii_char += key;
        if (ascii_char>ascii_end){
            ascii_char -= alphabet_count;
        }
        resultString += String.fromCharCode(ascii_char);
    }

    return  resultString;
}
