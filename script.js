function volume_sphere() {
    //Write your code here
	 let radius = document.getElementById("radius").value;
    let radius = parseFloat(radius);
    if (!isNaN(radius) && radius >= 0) {
        let volume = (4/3) * Math.PI * Math.pow(radius, 3);
        let roundedVolume = volume.toFixed(4);
        document.getElementById("volume").value = roundedVolume;
    } else {
        document.getElementById("volume").value = 'NaN';
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
