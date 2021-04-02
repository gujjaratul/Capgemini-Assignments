function Random(){
    x = (Math.floor(Math.random() * 2) == 0)
    if(x)
        document.getElementById('E7').innerHTML = "Have a Good Day!"
    else
        document.getElementById('E7').innerHTML = "Have a Bad Day!"
}