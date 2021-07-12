
function WhileFactorial(n) {
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial = factorial * i;   
        i++;
    }
    return factorial

}

var result = WhileFactorial(10);
console.log(result);