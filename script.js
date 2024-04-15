//bai 1
function checkElementExist(arr,num){
    for(i=0;i<arr.length;i++){
        if(arr[i]==num){
            return true
            
        }
    }
    return false
}
console.log(checkElementExist([1,2,3,4,5], 6))

//bai 2
function getElementGrater(arr,num){
    result=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]>num)
        result.push(arr[i])
        continue
    }
    return result
}
console.log(getElementGrater([1,2,3,4,5], 3))

//bai 3
function getHex() {
    let hex=["#"]
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    while(hex.length<7){    
        let random = Math.random()*hexNumbers.length;
        hex.push(hexNumbers[random]);
    }
    result=hex.join('')
    return result
}
console.log(getHex())