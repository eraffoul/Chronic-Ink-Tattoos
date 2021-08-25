export function Reduce(array, reducer, initialValue) {
    var acc = initialValue;
    var param_length = reducer.length;
    let arr_len = array.length;

    let is_array_numbers = array.every(function(element) {return typeof element === 'number';});
    let is_array_string = array.every(function(element) {return typeof element === 'string';});

    for (let i=0;i<arr_len;i=i+param_length){
      var args = new Array();
      for (let j=0;j<param_length;j++){
        if ((i+j) < arr_len){
          args.push(array[i+j]);
        }
        else
        {
          if (is_array_numbers){
            args.push(0);
          }
          else if (is_array_string){
            args.push("");
          }
        }
      }

      acc += reducer.apply(this,args);
    }

    return acc;
    console.log(reducer);

}

