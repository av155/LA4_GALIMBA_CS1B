class Queue {
  constructor() {
    this.customerData = {};
    this.nextNumber = 1;
  }

  addCustomer(name) {
    this.customerData[this.nextNumber] = name;
    console.log(`${name} added with number ${this.nextNumber}.`);
    this.nextNumber++;
  }

  serveCustomer(number) {
    if (!(number in this.customerData)) {
      console.log(`Number ${number} not found.`);
      return null;
    }
    let served = this.customerData[number];
    delete this.customerData[number];
    console.log(`${served} served.`);
    return served;
  }

  showQueue() {
    if (Object.keys(this.customerData).length === 0) {
      console.log("Queue is empty.");
    } else {
      console.log("Queue:", this.customerData);
    }
  }
}


// Example usage:
const queue = new Queue(); // Create a Queue object
queue.addCustomer("Lito");
queue.addCustomer("Engelbret");
queue.showQueue();
queue.serveCustomer(1);
queue.showQueue();
