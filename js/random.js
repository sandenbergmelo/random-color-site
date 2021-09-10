const btn = document.getElementById('btn') // Button object

// Events that will trigger the functions
window.addEventListener('load', randomColor)
btn.addEventListener('click', randomColor)

function randomColor() {// Function to change the background to a random color
	
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)

	document.body.style.background = `rgb(${r}, ${g}, ${b})`

}
