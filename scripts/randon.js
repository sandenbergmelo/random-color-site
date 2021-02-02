var btn = document.getElementById('btn')

window.addEventListener('load', randomColor)
btn.addEventListener('click', randomColor)

function randomColor() {
	
	let r, g, b

	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)

	document.body.style.background = `rgb(${r}, ${g}, ${b})`

}
