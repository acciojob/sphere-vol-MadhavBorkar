function volume_sphere(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the radius value from the input field
    let radiusValue = document.getElementById("radius").value;
    let radius = parseFloat(radiusValue);

    if (!isNaN(radius) && radius >= 0) {
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);
        let roundedVolume = volume.toFixed(4);
        document.getElementById("volume").value = roundedVolume;
    } else {
        document.getElementById("volume").value = 'NaN';
    }
} 

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('MyForm').onsubmit = volume_sphere;
});