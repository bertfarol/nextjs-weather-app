export function formatUnix(epoch) {
    const dayDate = new Date(epoch * 1000);
    return dayDate.toLocaleTimeString("en-US", { hour: "numeric" });
}

export function formatNumber(decimal) {
    return decimal.toFixed(0); //round of decimal numbers
}