// 1. Car class
class Car {
    constructor(make, model, year, type, isAvailable = true) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.type = type;
      this.isAvailable = isAvailable;
    }
  }
  
  // 2. Customer class
  class Customer {
    constructor(name) {
      this.name = name;
      this.rentedCars = [];
    }
  
    // 3. Method to rent a car
    rentCar(car) {
      if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented ${car.make} ${car.model}`);
      } else {
        console.log(`Sorry, ${car.make} ${car.model} is already rented.`);
      }
    }
  
    // 6. Method to return a car
    returnCar(car) {
      const carIndex = this.rentedCars.indexOf(car);
      if (carIndex > -1) {
        car.isAvailable = true;
        this.rentedCars.splice(carIndex, 1);
        console.log(`${this.name} returned ${car.make} ${car.model}`);
  
        // Simulate a delay in processing the return (2 seconds)
        setTimeout(() => {
          console.log(`${car.make} ${car.model} is now available for rent.`);
        }, 2000);
      } else {
        console.log(`This car is not rented by ${this.name}.`);
      }
    }
  }
  
  // 4. PremiumCustomer class that inherits from Customer
  class PremiumCustomer extends Customer {
    constructor(name, discountRate = 0.1) {
      super(name); // Call the parent (Customer) constructor
      this.discountRate = discountRate;
    }
  }
  
  // 5. Function to calculate rental price
  function calculateRentalPrice(car, days, customer) {
    const baseRate = 50; // Base rental price per day
    let typeRateMultiplier = 1;
  
    // Adjust rate based on car type
    switch (car.type) {
      case 'SUV':
        typeRateMultiplier = 1.5;
        break;
      case 'Sedan':
        typeRateMultiplier = 1.2;
        break;
      default:
        typeRateMultiplier = 1;
    }
  
    let totalPrice = baseRate * typeRateMultiplier * days;
  
    // Apply discount if customer is a premium customer
    if (customer instanceof PremiumCustomer) {
      totalPrice -= totalPrice * customer.discountRate;
    }
  
    return totalPrice;
  }
  
  // 7. Maintenance function
  function Maintenance(car, delay) {
    console.log(`Maintenance started for ${car.make} ${car.model}`);
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
  }
  
  // 8. Demonstration
  // Create car objects
  const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
  const car2 = new Car("Ford", "Explorer", 2019, "SUV");
  const car3 = new Car("Honda", "Civic", 2021, "Sedan");
  
  // Create regular and premium customers
  const customer1 = new Customer("Alice");
  const customer2 = new PremiumCustomer("Bob", 0.1); // 10% discount
  
  // Show renting cars
  customer1.rentCar(car1); // Alice rents Toyota Corolla
  customer2.rentCar(car2); // Bob rents Ford Explorer
  
  // Calculate rental prices
  const days = 3;
  console.log(`Rental price for ${customer1.name}: $${calculateRentalPrice(car1, days, customer1)}`);
  console.log(`Rental price for ${customer2.name} (premium): $${calculateRentalPrice(car2, days, customer2)}`);
  
  // Show returning cars
  customer1.returnCar(car1);
  customer2.returnCar(car2);
  
  // Show maintenance
  Maintenance(car3, 3000); // Maintenance for Honda Civic with a delay of 3 seconds
  
  // Using call and apply for demonstration
  customer1.rentCar.call(customer1, car3); // Alice rents Honda Civic via call
  customer1.returnCar.apply(customer1, [car3]); // Alice returns Honda Civic via apply
