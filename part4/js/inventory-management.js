/*eslint-env browser*/

function view(inventory) {
    "use strict";
    inventory.forEach(item => {
        console.log(`${item.sku}\t${item.product}\t(${item.quantity})\t$${item.cost}`);
    });
    console.log("");
}

function update(inventory) {
    "use strict";
    let sku = parseInt(prompt("Enter the SKU to update"), 10);
    if (isNaN(sku)) {
        alert("Please enter a valid SKU.");
        return;
    }
    let product = inventory.find(item => item.sku === sku);
    if (!product) {
        alert("SKU not found.");
        return;
    }
    let quantity = parseInt(prompt("Enter new quantity"), 10);
    if (isNaN(quantity) || quantity < 0) {
        alert("Please enter a valid quantity.");
        return;
    }
    product.quantity = quantity;
    console.log(`Updated ${product.product} to ${quantity} units.`);
}

function inventoryMenu() {
    "use strict";
    let inventory = [
        { sku: 101, product: "TShirt", quantity: 17, cost: 24.99 },
        { sku: 102, product: "Jeans", quantity: 33, cost: 49.99 },
        { sku: 103, product: "Jacket", quantity: 23, cost: 39.99 },
        { sku: 104, product: "Belt", quantity: 15, cost: 19.99 },
        { sku: 105, product: "Socks", quantity: 13, cost: 9.99 }
    ];
    while (true) {
        let command = prompt("Enter command (view, update, exit)").toLowerCase();
        if (command === "view") {
            view(inventory);
        } else if (command === "update") {
            update(inventory);
        } else if (command === "exit") {
            console.log("Program terminated.");
            break;
        } else {
            alert("Invalid command.");
        }
    }
}
inventoryMenu();
