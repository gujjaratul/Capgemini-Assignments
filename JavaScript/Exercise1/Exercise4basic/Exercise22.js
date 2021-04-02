function rotateArray1() {
    k=3,nums=[1,2,3,4,5,6]
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    document.getElementById("rotate").innerHTML= nums
}