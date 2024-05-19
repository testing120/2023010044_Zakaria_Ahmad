var a = 10;  
var b = 20;  
var c = 30; 

var terbesar;

if(a > b && a > c) {
    terbesar = a;
} else if(b > a && b > c) {
    terbesar = b;
} else {
    terbesar = c;
}

console.log("Bilangan terbesar adalah: " + terbesar);
