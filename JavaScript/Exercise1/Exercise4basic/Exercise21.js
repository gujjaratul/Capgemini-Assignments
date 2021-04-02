var result=[];
var one =[1,4,6];
var two =[2,3,5];
function sorting()
{
    var three = one.concat(two);
    document.write("List after merging and before sorting "+three);
    
    var four = three.sort();
    document.write("<br><br>"+four);
   
}

sorting();