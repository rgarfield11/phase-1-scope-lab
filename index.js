// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'jason momoa';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'not jason momoa';
}