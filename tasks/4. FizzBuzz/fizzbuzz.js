export function getFizzBuzzUntil(n) {
  let result = [];

  for (let i=1;i<=n;i++){
      let FizzBuzz;
      if (i%15 == 0) {
          FizzBuzz = 'FizzBuzz';
      }
      else if (i%5 == 0){
          FizzBuzz = 'Buzz';
      }
      else if (i%3 == 0){
          FizzBuzz = 'Fizz';
      }
      else {
          FizzBuzz = i;
      }

      result.push(FizzBuzz);
  }

  return result;

}
