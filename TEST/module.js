let module = (function(){
	function CreateTrafficLightButton (button, color) {
		var btn,
			couter = 0,
			arrColor = ['red', 'yellow', 'green'],
			currentColor = arrColor.indexOf(color) > -1 ? arrColor.indexOf(color) : 0;
		function createButton () {
			btn = document.createElement('button')
			btn.setAttribute('id', button ? button : '')
			btn.innerText = button ? button : 'default'
		}
		function clickEvent () {
			btn.addEventListener('click', countFunc)
		}
		function countFunc () {
			couter++;
			console.log(couter, arrColor[currentColor++])
		}

		function init () {
			createButton() 
			document.getElementById('root').appendChild(btn)
			clickEvent()
		}
		function reset () {
			currentColor = 0
			couter = 0
		}
		function destroy () {
			btn.remove()
		}
		return {
			init,
			reset,
			destroy
		}
	}
	function timeOutCircle (numb) {
		for (var i = 0; i < numb; i++) {
			let b = i
			setTimeout(function() {
				console.log(b)
			},1000)
		}
	} 
	return {
		CreateTrafficLightButton,
		timeOutCircle
	}
})();