
var navKeys = Object.keys(Object.getPrototypeOf(navigator));

var div = document.getElementById("navigator")
navKeys.forEach(key => {
    let p = document.createElement("p");
    p.innerHTML = `${key}: ${JSON.stringify(navigator[key])}`;
    div.append(p);
});


