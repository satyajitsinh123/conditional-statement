function calculateBill(fruit, quantity) {
    let pricePerUnit;
    switch (fruit.toLowerCase()) {
        case 'apple':
            pricePerUnit = 2; // Price per apple
            break;
        case 'banana':
            pricePerUnit = 1; // Price per banana
            break;
        case 'orange':
            pricePerUnit = 1.5; // Price per orange
            break;
        case 'grape':
            pricePerUnit = 3; // Price per grape bunch
            break;
        case 'mango':
            pricePerUnit = 2.5; // Price per mango
            break;
        default:
            console.log('Fruit not available');
            return 0;
    }
    let total = pricePerUnit * quantity;
    return total;
}

// Example usage
let fruit = prompt('Enter the fruit name:');
let quantity = parseInt(prompt('Enter the quantity:'));

let bill = calculateBill(fruit, quantity);
if (bill > 0) {
    console.log(`The total bill for ${quantity} ${fruit}(s) is $${bill}`);
}
