var color1 = document.getElementById('color1')
var color2 = document.getElementById('color2')
var html = document.getElementsByTagName('html')[0]


var colorChanger = () =>  {

	html.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`

}


color1.addEventListener('input', colorChanger);
color2.addEventListener('input', colorChanger)

