const num = document.getElementById("num");
const result = document.getElementById("result");
const btn = document.getElementById("computeBtn");

btn.addEventListener("click", () => {
    const n = parseInt(num.value);

    if (isNaN(n) || n < 0) {
        result.textContent = "Invalid number.";
        return;
    }

    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;

    result.textContent = "Factorial: " + f.toLocaleString();
});