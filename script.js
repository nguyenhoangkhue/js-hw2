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
    const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    while(hex.length<7){    
        let random = Math.floor(Math.random()*hexNumbers.length)
        hex.push(hexNumbers[random])
    }
    result=hex.join('')
    return result
}
console.log(getHex())

//bai 4
function rgb(){
    let randomRgb=[]
    while(randomRgb.length<3){
        let random = Math.floor(Math.random()*255)
        randomRgb.push(random)
    }
    return randomRgb
}
console.log(rgb())

// Object
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
//1
console.log("Stt | ten san pham | thuong hieu | so luong")
for(i=0;i<products.length;i++){
    const product=products[i]
    console.log(`${i+1}|${product.name}|${product.price}|${product.brand}|${product.count}`)
}
//2
console.log("Stt | ten san pham | tong tien")
for(i=0;i<products.length;i++){
    const product=products[i]
    console.log(`${i+1}|${product.name}|${product.price*product.count}`)
}
//3
console.log("cac san pham co thuong hieu Apple:")
for(i=0;i<products.length;i++){
    const product=products[i]
    if(product.brand=="Apple"){
    console.log(product.name)
    }
}
//4
console.log("cac san pham co gia > 20000000:")
for(i=0;i<products.length;i++){
    const product=products[i]
    if(product.price>20000000){
        console.log(product.name)
    }
}
//5
console.log("cac san pham co chu pro trong ten:")
for(i=0;i<products.length;i++){
    const product=products[i]
    arrName=product.name.toLowerCase().split("")
    for(j=0;j<arrName.length;j++){
        if(arrName[j]=="p"&&arrName[j+1]=="r"&&arrName[j+2]=="o"){
            console.log(product.name)
        }
    }
}
//6
console.log("mang sau khi them 1 phan tu:")
let newObj={
    name: "Iphone 12 Pro Max",
    price: 2000000, 
    brand: "Apple", 
    count: 1, 
}
products.push(newObj)
console.log(products)
//8
console.log("mang sau khi sap xep cac san pham theo gia tang dan:")
function compare(a,b) {
    return a.price - b.price;
}
console.log(products.sort(compare))
//9
console.log("mang sau khi sap xep cac san pham theo count giam dan:")
function compare(a,b) {
    return b.count - a.count;
}
console.log(products.sort(compare))
//10
console.log("2 san pham ngau nhien:")
function randomProducts(){
    for(i=0;i<products.length;i++){
        const product=products[i]
        let randomPrd=[]
        while(randomPrd.length<2&&product.count>0){
            let random = Math.floor(Math.random()*products.length)
            randomPrd.push(products[random])
            product.count--
        }
        return randomPrd
    }
}
console.log(randomProducts())
//7
console.log("mang sau khi xoa tat ca cac san pham cua thuong hieu samsung:")
for(i=0;i<products.length;i++){
    const product=products[i]
    if(product.brand=="Samsung"){
    products.splice(i,1,'')
    }
}
console.log(products)