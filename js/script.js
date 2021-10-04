function Calculate() {
    var apoapsis = Number(document.params.apoapsis.value);
    var periapsis = Number(document.params.periapsis.value);
    var eccentricity = Number(document.params.eccentricity.value);

    if (apoapsis == "") {
        apoapsis = ((1 + eccentricity) * periapsis) / (1 - eccentricity);
        document.getElementById("result-text").innerHTML = "Apoapsis >> " + Math.round(apoapsis);
    } else if (periapsis == "") {
        periapsis = ((1 - eccentricity) * apoapsis) / (1 + eccentricity);
        document.getElementById("result-text").innerHTML = "Periapsis >> " + Math.round(periapsis);
    } else if (eccentricity == "") {
        eccentricity = (apoapsis - periapsis) / (apoapsis + periapsis);
        document.getElementById("result-text").innerHTML = "Eccentricity >> " + eccentricity.toFixed(3);
    }
}