let arr = [89,99,33,77];
let [mynum , mynum2 , mynum3 ,mynum4]=arr;
console.log(mynum3);


const Obj2 = {Name:"Atul", address:{city:"Mdh Meerut", pincode:"250002"}};
let {Name,address:{city,pincode}} = Obj2;
console.log(pincode);
