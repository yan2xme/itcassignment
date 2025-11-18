const income = document.getElementById("income");
const result = document.getElementById("result");
const btn = document.getElementById("computeBtn");

btn.addEventListener("click", () => {
    const x = parseFloat(income.value);

    if (isNaN(x) || x < 0) {
        result.textContent = "Invalid income.";
        return;
    }

    let tax = 0;

    if (x <= 250000) tax = 0;
    else if (x <= 400000) tax = (x - 250000) * 0.20;
    else if (x <= 800000) tax = 30000 + (x - 400000) * 0.25;
    else if (x <= 2000000) tax = 130000 + (x - 800000) * 0.30;
    else if (x <= 8000000) tax = 490000 + (x - 2000000) * 0.32;
    else tax = 2410000 + (x - 8000000) * 0.35;

    result.textContent = "Income Tax: ₱" + tax.toLocaleString();
});