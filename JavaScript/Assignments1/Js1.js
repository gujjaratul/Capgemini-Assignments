function findCelsius(){
  var fahrenheit = document.getElementById("fahrenheit").value;
  var celsius;
  if(fahrenheit != ''){
    celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("output").innerHTML = celsius;
  }else{
    document.getElementById("output").innerHTML = "Please enter a value!";
  }
}