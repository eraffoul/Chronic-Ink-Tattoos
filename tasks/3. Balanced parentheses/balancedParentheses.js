export function areParenthesesBalanced(inputString) {
    let counter = 0;
    for (let i=0; i<inputString.length; i++){
        if (inputString[i]=='('){
            counter++;
        }
        else if (inputString[i]==')'){
            counter--;
        }

        if (counter<0) break;
    }
    if (counter == 0) return true;
    else return false;
}