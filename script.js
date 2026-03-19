function runSystem() {

    // -------------------------
    // USER INPUT
    // -------------------------
    let temperature = parseFloat(document.getElementById("tempInput").value);
    let humidity = parseFloat(document.getElementById("humInput").value);

    if (isNaN(temperature) || isNaN(humidity)) {
        alert("Please enter valid values");
        return;
    }

    // -------------------------
    // DNN (SIMULATED MODEL)
    // -------------------------
    let w1 = 0.6;
    let w2 = 0.4;
    let bias = 5;

    let predicted = (temperature * w1 + humidity * w2 - bias);

    if (predicted < 0) predicted = 0;

    // -------------------------
    // ACTUAL WATER (SIMULATION)
    // -------------------------
    let actual = predicted - (Math.random() * 3);

    if (actual < 0) actual = 0;

    // -------------------------
    // EFFICIENCY
    // -------------------------
    let efficiency = predicted === 0 ? 0 : (actual / predicted) * 100;

    // -------------------------
    // SEASON DETECTION
    // -------------------------
    let season = "";

    if (temperature > 35) {
        season = "Summer";
    } else if (temperature < 20) {
        season = "Winter";
    } else {
        season = "Moderate";
    }

    // -------------------------
    // DMBI (REAL INSIGHTS)
    // -------------------------
    let insight = "";

    if (season === "Summer") {
        insight = "Recovered water can be used for irrigation and groundwater recharge due to high evaporation conditions.";
    } 
    else if (season === "Winter") {
        insight = "Recovered water can be stored and reused within cooling systems due to low evaporation.";
    } 
    else {
        insight = "Recovered water can be partially reused and partially directed for agricultural applications.";
    }

    // Additional conditions
    if (humidity > 70) {
        insight += " High humidity increases condensation efficiency.";
    }

    if (humidity < 40) {
        insight += " Low humidity leads to higher water loss, system optimization required.";
    }

    // -------------------------
    // DISPLAY OUTPUT
    // -------------------------
    document.getElementById("temp").innerText = temperature + " °C";
    document.getElementById("hum").innerText = humidity + " %";
    document.getElementById("pred").innerText = predicted.toFixed(2) + " L";
    document.getElementById("actual").innerText = actual.toFixed(2) + " L";
    document.getElementById("eff").innerText = efficiency.toFixed(2) + " %";
    document.getElementById("insight").innerText = insight;
}
