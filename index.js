
console.log(navigator);

var toInsert = {
    platform: navigator.platform,
    userAgent: navigator.userAgent
}
document.getElementById("navigator").innerHTML = JSON.stringify(toInsert);
