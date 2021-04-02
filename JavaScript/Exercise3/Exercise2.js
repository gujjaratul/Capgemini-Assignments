class Rectangle{
    constructor(length , width)
    {
        this.length = length;
        this.width = width;
    }
}
Rectangle.prototype.getArea = function()
{
    return this.length * this.width ;
}
const obj = new Rectangle(45,20);
document.write("Area of the Rectangle is "+obj.getArea());
