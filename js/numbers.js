// 6 matematiniai operatoriai: - + * / % **

// console.log(typeof NaN);
// const a = "skeebeedee" - 4;
// const b = "skrrrr" * 8.21;
// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log(NaN > 0 ? "N" : "T");
// console.log(NaN < 0 ? "N" : "T");

// Matematinių f-ijų bilblioteka Math(). E, PI, abs(), sqrt(), floor()...

console.log("\n**** Teigiamas ar neigiamas? ****\n");

function numSign(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Error: input must be a number.";
  }
  if (num === 0) return "a number 0 is neither negative nor positive";
  return num > 0 ? num + " is positive" : num + " is negative";
}

console.log(numSign("aaa") + "\n");
