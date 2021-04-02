function sum()
{ 
    var result=0;
    var num = document.getElementById("num1").value;
    

    for(i=1;i<=num;i++)
    {
        if(i%3 ==0 || i%5 ==0)
        result = result + i;
    }
    document.getElementById("demo").innerHTML = "Sum is " +result;
}
