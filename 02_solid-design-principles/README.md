# SOLID Design Principles

- The **SOLID design principles** are a set of guidelines that help developers create robust, maintainable, and scalable object-oriented software.
- These principles were introduced by **Robert C. Martin (Uncle Bob)** and are widely used in software engineering to ensure good design practices.

## What Does SOLID Stand For?

### 1. **`S` - Single Responsibility Principle (SRP)**:

- **Definition**: A class should have only one reason to change, meaning it should have only one responsibility.
- **Purpose**: This principle ensures that a class focuses on a single task, making it easier to understand, test, and maintain.
- **Example**:
  ```typescript
  class InvoicePrinter {
    print(invoice: Invoice): void {
      // Logic to print the invoice
    }
  }
  ```

### 2. **`O` - Open/Closed Principle (OCP)**:

- **Definition**: Software entities (classes, modules, functions) should be open for extension but closed for modification.
- **Purpose**: This principle promotes adding new functionality without altering existing code, reducing the risk of introducing bugs.
- **Example**:

  ```typescript
  interface Shape {
    area(): number;
  }

  class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
      return Math.PI * this.radius * this.radius;
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
  }
  ```

### 3. **`L` - Liskov Substitution Principle (LSP)**:

- **Definition**: Subtypes must be substitutable for their base types without altering the correctness of the program.
- **Purpose**: This principle ensures that derived classes extend the behavior of their base classes without changing their functionality.
- **Example**:

  ```typescript
  class Bird {
    fly(): void {
      console.log('Flying');
    }
  }

  class Sparrow extends Bird {}
  ```

### 4. **`I` - Interface Segregation Principle (ISP)**:

- **Definition**: A class should not be forced to implement interfaces it does not use.
- **Purpose**: This principle ensures that interfaces are small and specific to the needs of the implementing classes.
- **Example**:

  ```typescript
  interface Printer {
    print(): void;
  }

  interface Scanner {
    scan(): void;
  }

  class MultiFunctionPrinter implements Printer, Scanner {
    print(): void {
      console.log('Printing...');
    }
    scan(): void {
      console.log('Scanning...');
    }
  }
  ```

### 5. **`D` - Dependency Inversion Principle (DIP)**:

- **Definition**: High-level modules should not depend on low-level modules. Both should depend on abstractions.
- **Purpose**: This principle reduces coupling between modules and promotes the use of interfaces or abstractions.
- **Example**:

  ```typescript
  interface Database {
    save(data: string): void;
  }

  class MySQLDatabase implements Database {
    save(data: string): void {
      console.log(`Saving data to MySQL: ${data}`);
    }
  }

  class Application {
    constructor(private database: Database) {}

    saveData(data: string): void {
      this.database.save(data);
    }
  }
  ```

## Benefits of SOLID Principles

- Improves code readability and maintainability.
- Reduces coupling and increases cohesion.
- Makes the codebase easier to test and extend.
- Encourages better design practices and scalability.

By adhering to SOLID principles, developers can create software that is easier to understand, modify, and scale over time.

## SOLID Acronym Table

| Letter  | Principle                                 | Description                                                                                          |
| ------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **`S`** | Single Responsibility Principle (**SRP**) | A class should have only one reason to change, focusing on a single responsibility.                  |
| **`O`** | Open/Closed Principle (**OCP**)           | Software entities should be open for extension but closed for modification.                          |
| **`L`** | Liskov Substitution Principle (**LSP**)   | Subtypes must be substitutable for their base types without altering the correctness of the program. |
| **`I`** | Interface Segregation Principle (**ISP**) | A class should not be forced to implement interfaces it does not use.                                |
| **`D`** | Dependency Inversion Principle (**DIP**)  | High-level modules should not depend on low-level modules. Both should depend on abstractions.       |

This table provides a concise way to remember the **SOLID principles** and their meanings.
