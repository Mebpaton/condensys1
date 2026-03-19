let chart;

function runSystem() {

    let temperature = parseFloat(document.getElementById("tempInput").value);
    let humidity = parseFloat(document.getElementById("humInput").value);

    if (isNaN(temperature) || isNaN(humidity)) {
        alert("Enter valid values");
        return;
    }

    // -------------------------
    // DNN (SIMULATED)
    // -------------------------
    let predicted = (temperature * 0.6 + humidity * 0.4 - 5);
    if (predicted < 0) predicted = 0;

    let actual = predicted - Math.random() * 3;
    if (actual < 0) actual = 0;

    let efficiency = predicted === 0 ? 0 : (actual / predicted) * 100;

    // -------------------------
    // SPM
    // -------------------------
    let warning = "";
    if (efficiency < 50) {
        warning = "Warning: System inefficiency detected";
    }

    // -------------------------
    // DMBI DECISION
    // -------------------------
    let decision = "";

    if (temperature > 35) {
        decision = "Use recovered water for irrigation and groundwater recharge.";
    } else if (temperature < 20) {
        decision = "Store water and reuse in cooling systems.";
    } else {
        decision = "Balance reuse and agricultural usage.";
    }

    if (humidity > 70) {
        decision += " High humidity improves recovery.";
    }

    if (humidity < 40) {
        decision += " Low humidity leads to higher water loss.";
    }

    // -------------------------
    // DISPLAY
    // -------------------------
    document.getElementById("pred").innerText = predicted.toFixed(2) + " L";
    document.getElementById("actual").innerText = actual.toFixed(2) + " L";
    document.getElementById("eff").innerText = efficiency.toFixed(2) + " %";
    document.getElementById("insight").innerText = decision;
    document.getElementById("warning").innerText = warning;

    // -------------------------
    // GRAPH FIXED
    // -------------------------
    let ctx = document.getElementById("chart").getContext("2d");

    if (chart) chart.destroy();

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Predicted", "Actual"],
            datasets: [{
                label: "Water (Liters)",
                data: [predicted, actual],
                backgroundColor: ["#00c3ff", "#007bff"],
                borderColor: ["#ffffff", "#ffffff"],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "white"
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "white"
                    }
                },
                y: {
                    ticks: {
                        color: "white"
                    }
                }
            }
        }
    });
}
