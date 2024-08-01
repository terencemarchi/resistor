function formatResistance(value) {
    if (value >= 1e6) {
        return (value / 1e6).toFixed(2) + ' MΩ'; // Convertit en Mégaohms
    } else if (value >= 1e3) {
        return (value / 1e3).toFixed(2) + ' kΩ'; // Convertit en Kiloohms
    } else {
        return value.toFixed(2) + ' Ω'; // Valeur en Ohms
    }
}

function calculateResistance() {
    const bandCount = parseInt(document.getElementById('band-count').value);
    let resistanceValue, toleranceValue, tempCoefficientValue;

    if (bandCount === 4) {
        let band1 = parseInt(document.getElementById('band1').value);
        let band2 = parseInt(document.getElementById('band2').value);
        let multiplier = parseFloat(document.getElementById('multiplier').value);
        toleranceValue = document.getElementById('tolerance').value;
        resistanceValue = (band1 * 10 + band2) * multiplier;
    } else if (bandCount === 5) {
        let band1 = parseInt(document.getElementById('band1').value);
        let band2 = parseInt(document.getElementById('band2').value);
        let band3 = parseInt(document.getElementById('band3').value);
        let multiplier = parseFloat(document.getElementById('multiplier').value);
        toleranceValue = document.getElementById('tolerance').value;
        resistanceValue = (band1 * 100 + band2 * 10 + band3) * multiplier;
    } else if (bandCount === 6) {
        let band1 = parseInt(document.getElementById('band1').value);
        let band2 = parseInt(document.getElementById('band2').value);
        let band3 = parseInt(document.getElementById('band3').value);
        let multiplier = parseFloat(document.getElementById('multiplier').value);
        toleranceValue = document.getElementById('tolerance').value;
        tempCoefficientValue = document.getElementById('temp-coefficient').value;
        resistanceValue = (band1 * 100 + band2 * 10 + band3) * multiplier;
    }

    // Formater la résistance
    let formattedResistance = formatResistance(resistanceValue);

    // Affichage des résultats
    let resultText = `Valeur de la résistance : ${formattedResistance}`;

    if (toleranceValue) {
        resultText += ` ± ${toleranceValue}%`;
    }
    if (tempCoefficientValue) {
        resultText += ` (${tempCoefficientValue})`;
    }

    document.getElementById('result').textContent = resultText;
}

function formatResistance(value) {
    if (value >= 1e6) {
        return (value / 1e6).toFixed(2) + ' MΩ'; // Convertir en Mégaohms
    } else if (value >= 1e3) {
        return (value / 1e3).toFixed(2) + ' kΩ'; // Convertir en Kiloohms
    } else {
        return value.toFixed(2) + ' Ω'; // Valeur en Ohms
    }
}

// Initialisation pour masquer/afficher les bandes correctement au démarrage
updateBands();

function updateBands() {
    const bandCount = parseInt(document.getElementById('band-count').value);
    const band3 = document.getElementById('band3');
    const band3Label = document.getElementById('band3-label');
    const tempCoefficient = document.getElementById('temp-coefficient');
    const tempCoefficientLabel = document.getElementById('temp-coefficient-label');

    // Masquer/afficher les bandes supplémentaires en fonction du nombre sélectionné
    if (bandCount === 4) {
        band3.style.display = 'none';
        band3Label.style.display = 'none';
        tempCoefficient.style.display = 'none';
        tempCoefficientLabel.style.display = 'none';
    } else if (bandCount === 5) {
        band3.style.display = 'block';
        band3Label.style.display = 'block';
        tempCoefficient.style.display = 'none';
        tempCoefficientLabel.style.display = 'none';
    } else if (bandCount === 6) {
        band3.style.display = 'block';
        band3Label.style.display = 'block';
        tempCoefficient.style.display = 'block';
        tempCoefficientLabel.style.display = 'block';
    }
}
