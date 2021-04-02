function leapYears() {
    var years=0
    var currentYear=2021
    res=""
    while(years < 20) {
        if((currentYear % 4 === 0) && (!((currentYear % 100 === 0) && (currentYear % 400 !== 0)))) {
            res += currentYear + " "
            years++
            currentYear++
        }else {
            currentYear++

        }
    }
    document.getElementById('leap-years').innerHTML = res
}