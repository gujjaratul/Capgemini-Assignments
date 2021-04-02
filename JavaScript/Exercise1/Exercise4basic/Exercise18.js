function perfectSquare(){
    perfect ="",i=j=1
    while(j<=20){
        root=Math.sqrt(i)
        if(root == Math.floor(root)){
            perfect+=i+" "
            j++
        }
        i++
    }
    document.getElementById('perfect').innerHTML = perfect
}