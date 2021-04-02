var j=0;
var t1 = 0;
var t2 = 1;
var nextTerm;
function Fibo() 
 {
    for(i=1;i<100;i++)
    {
       document.write(t1+"<br>");
        nextTerm = t1 + t2;
        t1 = t2;
        t2 = nextTerm;
    }
}
Fibo();