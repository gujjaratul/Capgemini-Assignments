
function EvenOdd(){
    var num = document.getElementById("input1").value;
    if(num % 2 == 0)
    {
        document.getElementById("demo").innerHTML= num + ' is an Even number' ;
    }
    else{
        document.getElementById("demo").innerHTML = num + ' is an Odd number';
    }
}
