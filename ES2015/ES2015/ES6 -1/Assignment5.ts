function add(a=1, b = 1) 
{
     return a + b;
     }
    console.log(add(6,5));
    console.log(add());

let userFriends=function(_username:any , ...userFriends: any[]) {
    
    console.log(_username);
    console.log(userFriends);}

userFriends("A", ["B", "C", "D", "E", "F"]);


let printCapitalNames= function(...names:any[]){
    for(let i in names)
    {
        console.log(names[i].toUpperCase());
    }
}
printCapitalNames("atul","ashish","manish","askshay","nikhil");





       