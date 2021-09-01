// get input values
let bill = document.querySelector('#bill');
let people = document.querySelector('#numOfPeople');
let custom = document.querySelector('#custom');

// caluculate tip
function calcTip() {
  // tip %
  document.querySelector('.five').value = "5";
  document.querySelector('.ten').value = "10";
  document.querySelector('.fifteen').value = "15";
  document.querySelector('.twentyFive').value = "25";
  document.querySelector('.fifty').value = "50";
  let customPercent = custom.value;

  // you might need an if statement

}

// calculate bill per person
function calcBill() {
  // get the bill
  let totalBill = bill.value;

  // number of people
  let totalPeople = people.value;

  let total = totalBill / totalPeople;
  // return what;

  // show total per person
  document.querySelector('#total').value = total;
}

people.addEventListener('keyup', calcBill);

