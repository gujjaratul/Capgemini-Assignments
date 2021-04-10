class Rectangle{
    constructor(width, height){
        this.height = height
        this.width = width
    }
}
Rectangle.prototype.getArea = function getArea(){
    return this.height * this.width
}
function three(){
    const r = new Rectangle(4, 5)
    r.height = 50
    document.getElementById('o3').innerHTML = "Area of Reactangle with Width : " + r.width + " and Height : " + r.height + " is = " + r.getArea()
}