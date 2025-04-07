// A generic function 'identity'
const identity = <T>(value: T): T => {
  return value;
};

const numIdentity: number = identity<number>(42);
const strIdentity: string = identity<string>('Hello, World!');

console.log(`Number identity: ${numIdentity}`);
console.log(`String identity: ${strIdentity}`);

// A generic class
class Pair<T> {
  constructor(
    public first: T,
    public second: T,
  ) {}

  swap(): void {
    const temp = this.first;
    this.first = this.second;
    this.second = temp;
  }
}

const numPair = new Pair<number>(1, 2);
numPair.swap();
console.log(`Number pair after swap: (${numPair.first}, ${numPair.second})`);

const strPair = new Pair<string>('Alice', 'Bob');
strPair.swap();
console.log(`String pair after swap: (${strPair.first}, ${strPair.second})`);
