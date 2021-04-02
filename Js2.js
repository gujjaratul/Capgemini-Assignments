function myFunction() {
    var hour = prompt(" Enter the number"); 
   
  
    var greeting = "";
    if (hour < 30 ) {
    for(i=0;i<hour;i++)
    {
        
     var greeting = greeting + "*" ;
    
    }
    }
    else {
      greeting = "Please Enter valid input";
    }
    document.getElementById("demo").innerHTML = greeting;

    var second =prompt("Enter the second number");
    var greet = "";
    if (second < 30 ) {
    for(i=0;i<second;i++)
    {
        
     var greet = greet + "*" ;
    
    }
    }
    else {
      greet = "Please Enter valid input";
    }
    document.getElementById("demon").innerHTML = greet;

   var third =prompt("Enter the third number");
    var regreet = "";
    if (third < 30 ) {
    for(i=0;i<third;i++)
    {
        
     var regreet = regreet + "*" ;
    
    }
    }
    else {
      regreet = "Please Enter valid input";
    }
    
    
    document.getElementById("civil").innerHTML = regreet;

  }
