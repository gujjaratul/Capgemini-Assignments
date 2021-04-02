var hundrednums = [];
while(hundrednums.length < 100){
    var r = Math.floor(Math.random() * 100) + 1;
    if(hundrednums.indexOf(r) === -1) hundrednums.push(r);
}
console.log(hundrednums);