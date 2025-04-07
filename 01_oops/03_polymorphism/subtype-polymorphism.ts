abstract class Shape {
  abstract area(): number;
}

class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  area(): number {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle: Shape = new Rectangle(5, 4);
const circle: Shape = new Circle(3);

const getTotalArea = (shapes: Shape[]): number => {
  return shapes.reduce((totalArea, shape) => totalArea + shape.area(), 0);
};

const totalArea = getTotalArea([rectangle, circle]);

console.log(`Total area of shapes: ${totalArea}`);
