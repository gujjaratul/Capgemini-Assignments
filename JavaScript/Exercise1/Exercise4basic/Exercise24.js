var number = 2342;
var arr=[];
function digit() {
    for(i=0;i<4;i++)
    {
        temp=number%10;
        num=parseInt(number/10);
        arr[i]=temp;
        number=num;
    }
    document.write(arr.reverse());
}
digit();