function Recurson(n) {
    if(n==0){
        return 1;
    }
    else{
       return Recurson(n-1) * n;
    }
}

var result = Recurson(1);
console.log(result);