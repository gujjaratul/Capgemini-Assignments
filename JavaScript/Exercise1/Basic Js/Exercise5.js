function lengthOfNonWords(){
    var count = 0
    var test1 = ['stop', 'quit', 'exit']
    test1.forEach(function(number) {
        if('q' != number.match(/(q)/g))
            count += number.length
    });
    document.getElementById('EJS1').innerHTML = count
}