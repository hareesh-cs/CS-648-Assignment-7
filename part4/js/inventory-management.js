/*eslint-env browser*/

function view(inventory) {
  "use strict";
  // Sort inventory by SKU number before displaying
  inventory.sort((a, b) => a[0] - b[0]);
  console.log("Current Inventory:");
  inventory.forEach((item) => {
    console.log(`${item[0]} ${item[1]} (${item[2]}) $${item[3].toFixed(2)}`);
  });
  console.log("");
}

function update(inventory) {
  "use strict";
  let sku = parseInt(prompt("Enter the SKU to update:"), 10);
  if (isNaN(sku)) {
    alert("Please enter a valid SKU.");
    return;
  }
  // Find the product by SKU
  let product = inventory.find((item) => item[0] === sku);
  if (!product) {
    alert("SKU not found.");
    return;
  }
  // Prompt for the new quantity
  let quantity = parseInt(
    prompt(`Enter the new quantity for ${product[1]}:`),
    10
  );
  if (isNaN(quantity) || quantity < 0) {
    alert("Please enter a valid non-negative quantity.");
    return;
  }
  // Update the product's quantity
  product[2] = quantity;
  console.log(`Updated ${product[1]} to ${quantity} units.`);
}

function displayMenu() {
  "use strict";
  console.log("Inventory Management System");
  console.log("---------------------------");
  console.log("Commands:");
  console.log("view - View all products");
  console.log("update - Update inventory");
  console.log("exit - Exit the program");
  console.log("---------------------------");
}

function inventoryMenu() {
  "use strict";
  // Initialize the inventory with sample products using nested arrays
  let inventory = [
    [101, "TShirt", 17, 24.99],
    [102, "Jeans", 33, 49.99],
    [103, "Jacket", 23, 39.99],
    [104, "Belt", 15, 19.99],
    [105, "Socks", 13, 9.99],
  ];

  // Display the command menu
  displayMenu();

  // Loop to process user commands
  while (true) {
    let command = prompt("Enter a command (view, update, exit):").toLowerCase();
    if (command === "view") {
      view(inventory);
    } else if (command === "update") {
      update(inventory);
    } else if (command === "exit") {
      console.log("Program terminated.");
      break;
    } else {
      alert("Invalid command. Please enter 'view', 'update', or 'exit'.");
    }
  }
}

// Start the inventory management system
inventoryMenu();
