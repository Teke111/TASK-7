function calculateMortgage() {
  const amount = parseFloat(document.getElementById("amount").value);
  const years = parseFloat(document.getElementById("term").value);
  const rate = parseFloat(document.getElementById("rate").value) / 100;
  const type = document.getElementById("type").value;

  const months = years * 12;
  const monthlyRate = rate / 12;

  let monthlyPayment, totalPayment;

  if (type === "repayment") {
    // Repayment mortgage formula
    monthlyPayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    totalPayment = monthlyPayment * months;
  } else {
    // Interest-only mortgage
    monthlyPayment = amount * monthlyRate;
    totalPayment = monthlyPayment * months + amount;
  }

  document.getElementById(
    "monthly"
  ).innerText = `Monthly repayments: £${monthlyPayment.toFixed(2)}`;
  document.getElementById(
    "total"
  ).innerText = `Total you'll repay: £${totalPayment.toFixed(2)}`;
}
