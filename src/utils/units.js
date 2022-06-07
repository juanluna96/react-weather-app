export const convertTemperature = (currentTemperature,temp) => {
    var newT = 0;
    switch (currentTemperature) {
        case "°C":
            newT = temp;
            break;
        case "°F":
            newT = (temp * 9/5) + 32;
            break;
        default:
            break;
    }
    return newT.toFixed();
};

export const convertMetric = (currentMetric,metric) => {
    var newM = 0;
    switch (currentMetric) {
        case "km/h":
            newM = metric;
            break;
        case "mph":
            // Convert meters to miles
            newM = metric * 0.000621371;
            break;
        default:
            break;
    }
    return newM.toFixed(2);
}
