function updateConversionFields() {
    const type = document.getElementById("conversionType").value;
    const inputSection = document.getElementById("inputSection");

    let label = "";
    let placeholder = "";

    switch(type) {
        case "cToF":
            label = "Enter Celsius:";
            placeholder = "Celsius value";
            break;

        case "fToC":
            label = "Enter Fahrenheit:";
            placeholder = "Fahrenheit value";
            break;

        case "mToFt":
            label = "Enter Meters:";
            placeholder = "Meters value";
            break;

        case "ftToM":
            label = "Enter Feet:";
            placeholder = "Feet value";
            break;

        default:
            inputSection.innerHTML = "";
            return;
    }

    inputSection.innerHTML = `
        <label>${label}</label><br>
        <input type="number" id="inputValue" class="mc-input" placeholder="${placeholder}">
    `;
}

function convertValue() {
    const type = document.getElementById("conversionType").value;
    const value = parseFloat(document.getElementById("inputValue")?.value);

    if (!type || isNaN(value)) {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    let result = "";

    switch(type) {
        case "cToF":
            result = `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
            break;

        case "fToC":
            result = `${value}°F = ${( (value - 32) * 5/9 ).toFixed(2)}°C`;
            break;

        case "mToFt":
            result = `${value} m = ${(value * 3.28084).toFixed(2)} ft`;
            break;

        case "ftToM":
            result = `${value} ft = ${(value / 3.28084).toFixed(2)} m`;
            break;
    }

    document.getElementById("result").innerText = result;
}