var list =[21,76,55,32,90];
var sum=0;
var sum1=0;
var sum2=0;
var i=0;
function four()
{
    for(i=0;i<list.length;i++)
    {
        sum= sum + list[i];
    }
    document.write("Sum by using for loop :"+sum);
}
function whilee()
{
    while(i<list.length)
    {
        sum1 = sum1+list[i];
        i++;
    }
    document.write("Sum by while loop :"+sum1);
}
