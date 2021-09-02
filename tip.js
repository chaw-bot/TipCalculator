// get input values
let bill = document.querySelector('#bill');
let people = document.querySelector('#numOfPeople');
let custom = document.querySelector('#custom');

const reset = document.querySelector('.reset');
      tip = document.querySelector('.tip');
      five = document.querySelector('.five');
      ten = document.querySelector('.ten');
      fifteen = document.querySelector('.fifteen');
      twentyfive = document.querySelector('.twentyFive');
      fifty = document.querySelector('.fifty');
      
    
// caluculate tip
function calcTip() {
  // tip %
  five.value = 5;
  // ten.value = 10;
  // fifteen.value = 15;
  // twentyFive.value = 25;
}

// calculate bill per person
function calcBill() {
  // get the bill
  let totalBill = bill.value;

  // number of people
  let totalPeople = people.value;

  let total = totalBill / totalPeople;

  
  // tip per person
  document.querySelector('#amount').value = (total * (five.value / 100));

  // show total per person
  document.querySelector('#total').value = total;
}

people.addEventListener('keyup', calcBill);

tip.addEventListener('click', calcTip);