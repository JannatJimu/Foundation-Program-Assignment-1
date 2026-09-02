// Question1 solution :
function describeValue(value) {
    const type = typeof value;
    const checkTruthiness = value ? "truthy" : "falsy";
    return `${type} | ${checkTruthiness}`;
}

// Question2 solution :
function getDayType(day) {
    day = day.toLowerCase();

    switch (day) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

// Question3 solution :
function validateUsername(username) {

    if (username.length < 4) {
        return "Too Short";
    }

    else if (username.includes(" ")) {
        return "No Space Allowed";
    }

    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";

}

// Question4 solution :
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    fare += waitingMinutes * 2;
    if (isNight) {
        fare = fare + (fare * 20) / 100;
    }

    return fare;
}

// Question5 solution :
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};