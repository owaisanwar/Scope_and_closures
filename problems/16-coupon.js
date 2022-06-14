/***********************************************************************
Write a function named: coupon(discount). The coupon function will intake a
number to apply as a discount, and will return a function that accepts an array
of prices. Every call to the function returned by coupon will return the array
of prices with the discount applied.

Example 1:
let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

Example 2:
let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]


***********************************************************************/

// your code here!
let discountNum = (coupen, num) => {
  let percent = coupen * 100;
  let discountValue = percent / 100 * num;
  return discountValue;
}

let coupon = (discount) => {
  return function(arr) {
    let discounted = arr.map((el) => {
      let res = el -  discountNum(discount,el);
      return res;
    })
    return discounted;
  }
}

let tenPercent = coupon(0.1, discountNum);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = coupon;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
