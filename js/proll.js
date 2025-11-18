const nameInput = document.getElementById("name");
const daysInput = document.getElementById("days");
const rateInput = document.getElementById("rate");
const deductionInput = document.getElementById("deduction");

const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");
const deleteLine = document.getElementById("deleteLine");

const tableBody = document.querySelector("#payrollTable tbody");

let employees = [];

function updateTable() {
    tableBody.innerHTML = "";

    employees.forEach((emp, index) => {
        const row = document.createElement("tr");

        const no = index + 1;
        const gross = emp.days * emp.rate;
        const net = gross - emp.deduct;

        row.innerHTML = `
            <td>${no}</td>
            <td>${emp.name}</td>
            <td>${emp.days}</td>
            <td>${emp.rate}</td>
            <td>${gross.toLocaleString()}</td>
            <td>${emp.deduct.toLocaleString()}</td>
            <td>${net.toLocaleString()}</td>
        `;

        tableBody.appendChild(row);
    });
}

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const days = parseFloat(daysInput.value);
    const rate = parseFloat(rateInput.value);
    const deduct = parseFloat(deductionInput.value);

    if (!name || isNaN(days) || isNaN(rate) || isNaN(deduct)) return;

    employees.push({ name, days, rate, deduct });

    nameInput.value = "";
    daysInput.value = "";
    rateInput.value = "";
    deductionInput.value = "";

    updateTable();
});

deleteBtn.addEventListener("click", () => {
    const line = parseInt(deleteLine.value);

    if (isNaN(line) || line < 1 || line > employees.length) return;

    employees.splice(line - 1, 1);

    deleteLine.value = "";
    updateTable();
});