// get input values
let bill = document.querySelector('#bill');
let people = document.querySelector('#numOfPeople');
let custom = document.querySelector('#custom');
let tipAmount = 0;

const reset = document.querySelector('.reset');
      tip = document.querySelector('.tip');
      five = document.querySelector('.five');
      ten = document.querySelector('.ten');
      fifteen = document.querySelector('.fifteen');
      twentyFive = document.querySelector('.twentyFive');
      fifty = document.querySelector('.fifty');
  
    
// get custom tip
function getTipCustom() {
  tipAmount = parseInt(custom.value, 10);
}

// get tip
document.querySelector('.tip-container').addEventListener('click', event => {
  if (event.target !== five && event.target !== ten && event.target !== fifteen && event.target !== twentyFive && event.target !== fifty) {
    return
  }
  tipAmount = event.target.value 
});

// calculate bill per person
function calcBill() {
  // get the bill
  let totalBill = bill.value;

  // number of people
  let totalPeople = people.value;
  let total = totalBill / totalPeople;

  // tip per person
  document.querySelector('#amount').value = (total * (tipAmount / 100)).toFixed(2);

  // show total per person
  document.querySelector('#total').value = total.toFixed(2);
}

function resetEverything() {
  location.reload();
}

people.addEventListener('keyup', calcBill);

custom.addEventListener('keyup', getTipCustom);

reset.addEventListener('click', resetEverything);