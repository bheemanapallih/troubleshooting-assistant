let total = 0;
let hardwareCount = 0;
let networkCount = 0;
let audioCount = 0;
let peripheralCount = 0;

// System Information
document.getElementById("os").textContent =
navigator.platform;

document.getElementById("browser").textContent =
navigator.userAgent.split(" ")[0];

document.getElementById("language").textContent =
navigator.language;

document.getElementById("resolution").textContent =
screen.width + " x " + screen.height;

// Solve Problem
function solveProblem(){

    let problem =
    document.getElementById("problem").value;

    let result =
    document.getElementById("result");

    total++;

    document.getElementById("total").textContent =
    total;

    switch(problem){

        case "internet":
            result.innerHTML = `
            <h3>Internet Not Working</h3>
            <ul>
                <li>Check router power.</li>
                <li>Restart router.</li>
                <li>Check network cables.</li>
                <li>Contact ISP.</li>
            </ul>`;
        break;

        case "wifi":
            result.innerHTML = `
            <h3>WiFi Connected But No Internet</h3>
            <ul>
                <li>Restart router.</li>
                <li>Reconnect WiFi.</li>
                <li>Run troubleshooter.</li>
            </ul>`;
        break;

        case "slow":
            result.innerHTML = `
            <h3>PC Running Slow</h3>
            <ul>
                <li>Close unused apps.</li>
                <li>Clear temp files.</li>
                <li>Scan for malware.</li>
                <li>Upgrade RAM.</li>
            </ul>`;
        break;

        case "printer":
            result.innerHTML = `
            <h3>Printer Not Detected</h3>
            <ul>
                <li>Reconnect USB.</li>
                <li>Restart printer.</li>
                <li>Install drivers.</li>
            </ul>`;
        break;

        default:
            result.innerHTML =
            "Please select a problem.";
    }
}

// Category Cards
function openCategory(category){

    switch(category){

        case "hardware":
            hardwareCount++;
            document.getElementById("hardwareCount").textContent =
            hardwareCount;
            alert("Hardware troubleshooting opened.");
        break;

        case "network":
            networkCount++;
            document.getElementById("networkCount").textContent =
            networkCount;
            alert("Network troubleshooting opened.");
        break;

        case "audio":
            audioCount++;
            document.getElementById("audioCount").textContent =
            audioCount;
            alert("Audio troubleshooting opened.");
        break;

        case "peripheral":
            peripheralCount++;
            document.getElementById("peripheralCount").textContent =
            peripheralCount;
            alert("Peripheral troubleshooting opened.");
        break;
    }
}
