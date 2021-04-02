var ck1;
var ck2;
var ck3;
var ck4;
var ck5;
var ck6;
var ck7;
function acceptInput()
{
    fullname=document.getElementById('nm').value;
    em1=document.getElementById('em').value;
    
    
   
    
    document.getElementById('fname2').value = fullname;
    document.getElementById('em2').value = em1;


    var address =document.getElementById('text1').value;
    document.getElementById('text2').value = address;

    if(document.getElementById('deliver').checked) { 
        document.getElementById("disp").innerHTML 
            = document.getElementById("deliver").value 
            + " "; 
    } 
    
    else  { 
        document.getElementById("disp").innerHTML 
            = document.getElementById("pick").value 
            + "";   
    } 
    
    var items=document.getElementsByName('top');
    var selectedItems="";
    for(var i=0; i<items.length; i++){
        if(items[i].type=='checkbox' && items[i].checked==true)
            selectedItems +=items[i].value+"\n";
    }
      document.getElementById("cheek").innerHTML=selectedItems;



      selectElement =  document.querySelector('#car');
        
output = selectElement.value;

document.querySelector('.output').textContent
      = output;



     
}