// Variable in the global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // Implicitly creates a global variable
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Constant variable
const leastFavoriteCustomer = 'alice';

function changeLeastFavoriteCustomer() {
  // This will throw an error because leastFavoriteCustomer is a constant
  leastFavoriteCustomer = 'charlie';
}

