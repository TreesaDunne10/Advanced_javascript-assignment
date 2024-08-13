// Base class Shape
class Shape {
    // Base draw method
    draw() {
        console.log("Drawing a shape...");
    }
}

// Subclass Circle that overrides the draw method
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle...");
    }
}

// Subclass Rectangle that overrides the draw method
class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle...");
    }
}

// Demonstrating polymorphism
function drawShape(shape) {
    shape.draw(); // Calls the appropriate draw method based on the object type
}

// Creating instances of Circle and Rectangle
const circle = new Circle();
const rectangle = new Rectangle();

// Using polymorphism to draw shapes
drawShape(circle);     
drawShape(rectangle);  
