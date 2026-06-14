function solveProblem(){

    let problem = document.getElementById("problem").value;
    let result = document.getElementById("result");

    if(problem==="internet"){
        result.innerHTML = `
        <h3>Internet Not Working</h3>
        <ul>
            <li>Check router power.</li>
            <li>Restart router.</li>
            <li>Check network cables.</li>
            <li>Contact ISP if issue continues.</li>
        </ul>`;
    }

    else if(problem==="wifi"){
        result.innerHTML = `
        <h3>WiFi Connected But No Internet</h3>
        <ul>
            <li>Restart router.</li>
            <li>Forget and reconnect WiFi.</li>
            <li>Run Windows Network Troubleshooter.</li>
        </ul>`;
    }

    else if(problem==="slow"){
        result.innerHTML = `
        <h3>PC Running Slow</h3>
        <ul>
            <li>Close unnecessary apps.</li>
            <li>Clear temporary files.</li>
            <li>Scan for malware.</li>
            <li>Upgrade RAM if possible.</li>
        </ul>`;
    }

    else if(problem==="printer"){
        result.innerHTML = `
        <h3>Printer Not Detected</h3>
        <ul>
            <li>Reconnect USB cable.</li>
            <li>Restart printer.</li>
            <li>Reinstall printer drivers.</li>
        </ul>`;
    }

    else{
        result.innerHTML = "Please select a problem.";
    }
}
