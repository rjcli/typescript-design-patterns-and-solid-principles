class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance = 0): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  // Useless constructor - There is no need for this constructor.
  // constructor(name: string) {
  //   super(name);
  // }

  bark(): void {
    console.log('Woof! Woof!');
  }

  move(distance = 5): void {
    console.log('The dog is running...');
    super.move(distance); // Calls the parent class move method
  }
}

const myDog = new Dog('Max');
myDog.bark(); // Woof! Woof!
myDog.move(); // The dog is running...\nMax moved 5 meters.
