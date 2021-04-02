console.log("Longest Token")
function longestToken(str){
    var res = str.split(/[ab | a]/)
    for(i = 0;i < res.length;i ++){
        if(res[i] == 'ab' || res[i] == 'a')
            res.splice(i, 1)
    }
    var lgth = 0
    var longest
    for(i = 0;i < res.length;i ++){
        if(res[i].length > lgth){
            lgth = res[i].length
            longest = res[i]
        }
    }
    console.log(longest)
}longestToken("ababcdababefgababhiab")
longestToken("aba")