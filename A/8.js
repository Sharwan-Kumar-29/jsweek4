function Iphone4(ASIN,color,display,camera,bluetooth){
    this.ASIN=ASIN
    this.color=color
    this.display=display
    this.camera=camera
    this.bluetooth=bluetooth
}
Iphone4.prototype.dial=function(){
    return `tring... tring...`
}
Iphone4.prototype.sendMessage=function(){
    return 'Sending message'
}
Iphone4.prototype.cameraClick=function(){
    return 'Camera clicked'
}
Iphone4.prototype.connectBluetooth=function(){
    return 'Bluetooth conncected successfully'
}

let i4=new Iphone4("B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1")

i4.__proto__=Iphone4.prototype

console.log(i3.ASIN); // 1
console.log(i3.color); // B09X67JBQV
console.log(i3.display); // 7.8
console.log(i3.camera); // IOS
console.log(i3.bluetooth); // 128mb

console.log(i3.dial()); // "tring.. tring..."
console.log(i3.sendMessage()); // "Sending message..."
console.log(i3.cameraClick()); // "Camera clicked"
console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."