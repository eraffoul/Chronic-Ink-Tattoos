export function isPalindrome(inputString) {
    let is_palindrome = true;
    for (let i=0,j=inputString.length-1; i<j; i++,j--){
        if (inputString[i]!=inputString[j]){
            is_palindrome = false;
            break;
        }
    }
    return is_palindrome;
}