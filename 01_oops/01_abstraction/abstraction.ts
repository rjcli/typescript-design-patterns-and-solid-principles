interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  constructor(
    private width: number,
    private height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const calculateTotalArea = (shapes: Shape[]): number => {
  let totalArea = 0;

  for (const shape of shapes) {
    totalArea += shape.area();
  }

  return totalArea;
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const shapes: Shape[] = [circle, rectangle];
console.log(calculateTotalArea(shapes));
