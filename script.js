function volume_sphere(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the radius value from the input field
    let radius = document.getElementById('radius').value;

    // Validate the input
    if (isNaN(radius) || radius < 0) {
        // Handle invalid input
    } else {
        // Calculate the volume of the sphere
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);

        // Round the volume to four decimal places
        volume = volume.toFixed(4);

        // Display the volume in the output field
        document.getElementById('volume').value = volume;
    }
}
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
