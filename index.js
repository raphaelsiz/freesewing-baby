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
        ankle: 0.25*waist,
        biceps: 0.35*waist,
        chest: waist,
        crossSeam: 0.85*waist,
        crossSeamFront: 0.4*waist,
        crotchDepth: 0.175*waist,
        head: 0.95*waist,
        heel: 0.3*waist,
        hips: 1.05*waist,
        hpsToBust: 0.075*waist,
        hpsToWaistBack: 0.01*waist,
        inseam: 0.5875*waist,
        knee: 0.55*waist,
        neck: 0.5*waist,
        seat: 1.1*waist,
        seatBack: 0.6*waist,
        shoulderSlope: 5,
        shoulderToElbow: 0.3*waist,
        shoulderToShoulder: 0.425*waist,
        shoulderToWrist: 0.55*waist,
        upperLeg: 0.85*waist,
        waistBack: 0.45*waist,
        waistToFloor: 0.925*waist,
        waistToHips: 0.075*waist,
        waistToKnee: 0.25*waist,
        waistToSeat: 0.15*waist,
        waistToUpperLeg: 0.125*waist,
        wrist: 0.275*waist
    }
    switch (requested) {
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