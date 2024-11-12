class Car {
    constructor(name, accelerationPower, brakingPower, maxFuelCapacity = 100) {
      this.name = name;
      this.accelerationPower = accelerationPower; // meters per second squared
      this.brakingPower = brakingPower; // meters per second squared
      this.speed = 0; // Initial speed is 0 meters per second
      this.fuelLevel = maxFuelCapacity; // Initial fuel level set to max
      this.maxFuelCapacity = maxFuelCapacity;
      this.fuelConsumptionRate = 0.1; // Fuel consumption rate per second of driving
    }
  
    // Method to accelerate the car
    accelerate() {
      if (this.fuelLevel > 0) {
        this.speed += this.accelerationPower;
        this.consumeFuel();
        console.log(`Accelerating. Current speed: ${this.speed} m/s`);
      } else {
        console.log("Out of fuel. Cannot accelerate.");
      }
    }
  
    // Method to apply brakes
    brake() {
      this.speed = Math.max(this.speed - this.brakingPower, 0);
      console.log(`Brakes applied. Current speed: ${this.speed} m/s`);
    }
  
    // Method to check current speed
    checkSpeed() {
      return this.speed;
    }
  
    // Method to refuel the car to maximum capacity
    refuel() {
      this.fuelLevel = this.maxFuelCapacity;
      console.log("Refueled to maximum capacity.");
    }
  
    // Method to consume fuel, stopping at zero
    consumeFuel() {
      this.fuelLevel = Math.max(this.fuelLevel - this.fuelConsumptionRate, 0);
      if (this.fuelLevel === 0) {
        console.log("Fuel depleted. Please refuel.");
      }
    }
  
    // Method to simulate a driving session
    drive(duration) {
      console.log(`Starting a ${duration} seconds drive session.`);
  
      for (let i = 0; i < duration; i++) {
        if (i % 5 === 0) {
          this.accelerate();
        } else if (i % 10 === 0) {
          this.brake();
        }
        else{
            this.consumeFuel()
        }
  
        console.log(
          `Time: ${i + 1} sec | Speed: ${this.speed.toFixed(
            2
          )} m/s | Fuel: ${this.fuelLevel.toFixed(2)}`
        );
  
        // Stop if fuel is depleted
        if (this.fuelLevel === 0) {
          console.log("Car stopped due to lack of fuel.");
          break;
        }
      }
    }
  }
  
  // Example usage:
  const myCar = new Car("Speedster", 5, 3);
  
  // Testing methods
  myCar.accelerate();
  myCar.brake();
  myCar.checkSpeed();
  myCar.refuel();
  myCar.drive(1003);
  myCar.refuel()
  