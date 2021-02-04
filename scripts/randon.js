var btn = document.getElementById('btn') // Button variable

// Events that will trigger the functions
window.addEventListener('load', randomColor)
btn.addEventListener('click', randomColor)

function randomColor() {// Function to change the background to a random color
	
	let r, g, b

	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)

	document.body.style.background = `rgb(${r}, ${g}, ${b})`

}
