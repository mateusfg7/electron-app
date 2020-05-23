const body = document.getElementsByTagName("body")[0]
const text = document.getElementById("color")
const button = document.getElementById("button")

function change(){
	const value = text.value
	body.style.background = value
}
