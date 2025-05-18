let queue = [];

function addCustomer(name) {
  queue.push(name);
  console.log(`${name} added to queue.`);
}

function serveCustomer() {
  if (queue.length === 0) {
    console.log("Queue is empty.");
    return null;
  }
  let served = queue.shift(); // Removes from the front (FIFO)
  console.log(`${served} served.`);
  return served;
}

function showQueue() {
  if (queue.length === 0) {
    console.log("Queue is empty.");
  } else {
    console.log("Queue:", queue);
  }
}

// Example usage:
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
showQueue();
serveCustomer();
showQueue();
