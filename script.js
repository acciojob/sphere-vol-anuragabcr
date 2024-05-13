function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
  r = parseInt(document.getElementById("radius").value)
  document.getElementById("volume").value = ((4/3) * Math.PI * Math.pow(r, 3)).toFixed(4)
} 

window.onload = function() {
  document.getElementById('submit').addEventListener('click', volume_sphere);
};