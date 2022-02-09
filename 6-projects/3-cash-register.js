/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

______________________
Currency Unit	Amount |
______________________
Penny	               |  $0.01 (PENNY)
Nickel	             |  $0.05 (NICKEL)
Dime	               |  $0.1 (DIME)
Quarter	             |  $0.25 (QUARTER)
Dollar	             |  $1 (ONE)
Five Dollars	       |  $5 (FIVE)
Ten Dollars	         |  $10 (TEN)
Twenty Dollars	     |  $20 (TWENTY)
One-hundred Dollars	 |  $100 (ONE HUNDRED)
*/

/* TESTS
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/

/*
SOLUTION SOURCE: https://github.com/Manish-Giri/FreeCodeCamp/blob/master/curriculum/challenges/english/02-javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register.english.md
*/

function checkCashRegister(price, cash, cid) {
  // lookup for money units
  const denom = [
    { name: 'ONE HUNDRED', val: 100 },
    { name: 'TWENTY', val: 20 },
    { name: 'TEN', val: 10 },
    { name: 'FIVE', val: 5 },
    { name: 'ONE', val: 1 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.1 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 },
  ];

  // result container
  let output = { status: null, change: [] };

  // difference between cash and price
  let change = cash - price;

  // apply reduce on cid (the 3rd param)
  // create register object with total value in it
  let register = cid.reduce(
    (acc, curr) => {
      // add all the cid values together
      acc.total += curr[1];

      // use cid's array first element as key and second element as values
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 } // acc is an object
  );

  // if total of register is the same as change's value
  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid; // set change array as cid it is
    return output;
  }

  // if total of register less than change's value
  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  let change_arr = denom.reduce((acc, curr) => {
    let value = 0;

    console.log('Hererere 0: ' + curr.name + ' - ' + curr.val, '\n');
    while (register[curr.name] > 0 && change >= curr.val) {
      // reduce difference value
      console.log('Hererere 1: ' + change);
      change -= curr.val;
      console.log('Hererere 2: ' + change);

      // reduce that unit value in register object
      register[curr.name] -= curr.val;

      // increase tracking value
      value += curr.val;

      // reformat change to 2 digits by doing this
      console.log('Hererere 3: ' + change);
      change = Math.round(change * 100) / 100;
      console.log('Hererere 4: ' + change, '\n');
    }

    // if the value of that unit has been used then push it in the change array
    if (value > 0) acc.push([curr.name, value]);

    return acc;
  }, []);

  // if there is no unit has been used to change or the difference has no tbeen resolved
  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  // otherwise, return OPEN status and set change array as change_arr
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
}

// open
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);

// open
console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);

// insufficient funds
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);

// closed
console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0],
  ])
);
