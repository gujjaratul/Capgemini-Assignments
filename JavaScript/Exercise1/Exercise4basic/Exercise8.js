function  Myfun()
{
   var num = document.getElementById("num9").value;
   for(i=1;i<=num;i++)
   {
       var fact=0;
       for(j=1;j<=num;j++)
       {
           if(i%j==0)
           fact++;
       }
       if(fact==2)
       document.write(i+"<br>");
   }
}