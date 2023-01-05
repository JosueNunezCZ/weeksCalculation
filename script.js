let balance;
let installment;
let interest;
let term_type;
let frequencyMultiplier;
let weeks;

switch (term_type) {
  case "WEEKLY":
    frequencyMultiplier = 4;
    break;
  case "BIWEEKLY":
    frequencyMultiplier = 2;
    break;
  case "MONTHLY":
    frequencyMultiplier = 1;
    break;
}

let Y = (interest / frequencyMultiplier / 100) * 1.16;

weeks = Math.ceil(
  -Math.log(1 - (balance * Y) / installment) / Math.log(1 + Y)
);
