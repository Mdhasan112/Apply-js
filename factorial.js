// let factorial = 1;

// for(let i = 1; i <= 10; i++) {
    
//      factorial = factorial * i;

//      console.log(factorial);
// }

function factorial (n) {

    let factorial = 1;

    for(let i = 1; i <= n; i++) {
    
        factorial = factorial * i;
   }
   return factorial;
}

let hk = factorial(6);
console.log(hk);