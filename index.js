export default function(waistMeasured,measurementsUsed,measurementsRequested) {
    let used = measurementsUsed || "mm";
    let requested = measurementsRequested || "mm";
    let waist;
    switch (used) {
        case "in":
            waist = waistMeasured*25.4;
            break;
        case "cm":
            waist = waistMeasured*10;
            break;
        case "mm":
            waist = waistMeasured;
            break;
        default:
            return console.error(used + " is not a valid measurement!")
    }
    let measurements = {
        waist,
        ankle: 0,
        biceps: 0,
        bustFront: 0,
        bustPointToUnderbust: 0,
        bustSpan: 0,
        chest: 0,
        crossSeam: 0,
        crossSeamFront: 0,
        crotchDepth: 0,
        head: 0,
        heel: 0,
        highBust: 0,
        highBustFront: 0,
        hips: 0,
        hpsToBust: 0,
        hpsToWaistBack: 0,
        hpsToWaistFront: 0,
        inseam: 0,
        knee: 0,
        neck: 0,
        seat: 0,
        seatBack: 0,
        shoulderSlope: 0,
        shoulderToElbow: 0,
        shoulderToShoulder: 0,
        shoulderToWrist: 0,
        underbust: 0,
        upperLeg: 0,
        waist: 0,
        waistBack: 0,
        waistToFloor: 0,
        waistToHips: 0,
        waistToKnee: 0,
        waistToSeat: 0,
        waistToUnderbust: 0,
        waistToUpperLeg: 0,
        wrist: 0
    }
    switch (measurementsRequested) {
        case "in":
            for (let measurement in measurements) {
                measurements[measurement] = measurement/25.4
            }
            break;
        case "cm":
            for (let measurement in measurements) {
                measurements[measurement] = measurement/10
            }
            break;
        case "mm":
            break;
        default:
            return console.error(used + " is not a valid measurement!")
    }
    return measurements;
}