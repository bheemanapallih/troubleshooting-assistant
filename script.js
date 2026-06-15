let total =
parseInt(localStorage.getItem("total")) || 0;

let hardwareCount =
parseInt(localStorage.getItem("hardwareCount")) || 0;

let networkCount =
parseInt(localStorage.getItem("networkCount")) || 0;

let audioCount =
parseInt(localStorage.getItem("audioCount")) || 0;

let peripheralCount =
parseInt(localStorage.getItem("peripheralCount")) || 0;

// Dashboard Load
document.getElementById("total").textContent = total;
document.getElementById("hardwareCount").textContent = hardwareCount;
document.getElementById("networkCount").textContent = networkCount;
document.getElementById("audioCount").textContent = audioCount;
document.getElementById("peripheralCount").textContent = peripheralCount;

// System Information
function detectOS(){

const ua = navigator.userAgent;

if(ua.includes("Win64") || ua.includes("x64"))
return "Windows 64-bit";

if(ua.includes("Windows"))
return "Windows";

if(ua.includes("Android"))
return "Android";

if(ua.includes("iPhone") || ua.includes("iPad"))
return "iOS";

if(ua.includes("Mac"))
return "macOS";

if(ua.includes("Linux"))
return "Linux";

return "Unknown";
}

function detectBrowser(){

const ua = navigator.userAgent;

if(ua.includes("Edg"))
return "Microsoft Edge";

if(ua.includes("Chrome"))
return "Google Chrome";

if(ua.includes("Firefox"))
return "Mozilla Firefox";

if(ua.includes("Safari") && !ua.includes("Chrome"))
return "Safari";

return "Unknown";
}

document.getElementById("os").textContent =
detectOS();

document.getElementById("browser").textContent =
detectBrowser();

document.getElementById("language").textContent =
navigator.language;

document.getElementById("resolution").textContent =
screen.width + " x " + screen.height;

// Solve Problem
function solveProblem(){

const problem =
document.getElementById("problem").value;

const result =
document.getElementById("result");

if(problem === ""){
result.innerHTML =
"<p>Please select a problem.</p>";
return;
}

total++;
document.getElementById("total").textContent =
total;

localStorage.setItem("total", total);

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
<li>Run Windows Troubleshooter.</li>
</ul>`;
break;

case "slow":
result.innerHTML = `
<h3>PC Running Slow</h3>
<ul>
<li>Close unused programs.</li>
<li>Delete temporary files.</li>
<li>Scan for malware.</li>
<li>Upgrade RAM if needed.</li>
</ul>`;
break;

case "printer":
result.innerHTML = `
<h3>Printer Not Detected</h3>
<ul>
<li>Reconnect USB cable.</li>
<li>Restart printer.</li>
<li>Install latest drivers.</li>
</ul>`;
break;
}
}

// Category Cards
function openCategory(category){

const result =
document.getElementById("result");

switch(category){

case "hardware":
hardwareCount++;
document.getElementById("hardwareCount").textContent =
hardwareCount;
localStorage.setItem("hardwareCount", hardwareCount);

result.innerHTML =
"<h3>🖥️ Hardware Issues</h3><p>Check RAM, HDD, SSD, motherboard and power issues.</p>";
break;

case "network":
networkCount++;
document.getElementById("networkCount").textContent =
networkCount;
localStorage.setItem("networkCount", networkCount);

result.innerHTML =
"<h3>🌐 Network Issues</h3><p>Diagnose internet, DNS and connectivity problems.</p>";
break;

case "audio":
audioCount++;
document.getElementById("audioCount").textContent =
audioCount;
localStorage.setItem("audioCount", audioCount);

result.innerHTML =
"<h3>🔊 Audio Issues</h3><p>Check speakers, microphone and audio drivers.</p>";
break;

case "peripheral":
peripheralCount++;
document.getElementById("peripheralCount").textContent =
peripheralCount;
localStorage.setItem("peripheralCount", peripheralCount);

result.innerHTML =
"<h3>🖨️ Peripheral Issues</h3><p>Diagnose printer, keyboard and mouse issues.</p>";
break;
}
}

// Search Categories
document.getElementById("search")
.addEventListener("keyup", function(){

const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

card.style.display =
card.textContent.toLowerCase().includes(value)
? "block"
: "none";

});

});
