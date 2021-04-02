var a = [21,5,17,18,2,7,20];
document.write(a);
var rev = new Array;
    for(var i = a.length-1; i >= 0; i--) {
        rev.push(a[i]);
    }
    document.write("<br><br>Reversed array<br><br>"+rev);