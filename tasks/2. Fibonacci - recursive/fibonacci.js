export function getFibonacciUntil(n) {
    if (n==0 || n==1){
        return [0];
    }
    else if (n==2){
        return [0,1];
    }
    let fibo = getFibonacciUntil(n-1);
    fibo.push(fibo[n-2]+fibo[n-3]);
    return fibo;
}
