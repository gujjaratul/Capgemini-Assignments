var array = [12, 5, 8, 3, 17];
document.write(array);
var el = 8; 
document.write("<br><br>Element to be seached "+el);
var flag = 0;  

for(var i=0; i<array.length; i++) {
	if(el == array[i])
		flag = 1;
}
if(flag == 1)
	document.write('<br><br>Element Found');
else
	document.write('Element Not Found');
