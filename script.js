function runSystem() {

    // SENSOR DATA (simulation)
    let temperature = (20 + Math.random() * 20).toFixed(2);
    let humidity = (40 + Math.random() * 60).toFixed(2);

    // -------------------------
    // DNN (SIMULATED MODEL)
    // -------------------------
    // Weighted formula (like neural network)
    let w1 = 0.6;
    let w2 = 0.4;
    let bias = 5;

    let predicted = (temperature * w1 + humidity * w2 - bias).toFixed(2);

    // -------------------------
    // ACTUAL WATER (REAL OUTPUT)
    // -------------------------
    let actual = (predicted - (Math.random() * 5)).toFixed(2);

    // -------------------------
    // EFFICIENCY
    // -------------------------
    let efficiency = ((actual / predicted) * 100).toFixed(2);

    // -------------------------
    // DMBI (INSIGHTS)
    // -------------------------
    let insight = "";

    if (temperature > 30 && humidity < 50) {
        insight = "High temperature and low humidity causing water loss";
    } 
    else if (humidity > 70) {
        insight = "High humidity improves water recovery";
    } 
    else {
        insight = "Moderate conditions for recovery";
    }

    // DISPLAY
    document.getElementById("temp").innerText = temperature + " °C";
    document.getElementById("hum").innerText = humidity + " %";
    document.getElementById("pred").innerText = predicted + " L";
    document.getElementById("actual").innerText = actual + " L";
    document.getElementById("eff").innerText = efficiency + " %";
    document.getElementById("insight").innerText = insight;
}