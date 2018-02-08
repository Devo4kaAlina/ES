let module = (function() {

	// 1
	function CreateTrafficLightButton(id, color) {
		var clickCounter = 0;
		var colorArray = ['red', 'yellow', 'green'];
		var colorIndex = colorArray.indexOf(color) > -1 ? colorArray.indexOf(color) : 0
		var button;

		function createButton() {
			button = document.createElement('button');
			button.id = id
			button.innerText = id
		}

		function addEventListener() {
			button.addEventListener('click', eventHandler)
		}

		function removeEventListener() {
			button.removeEventListener('click', eventHandler)
		}

		function getCurrentColor() {
			return colorIndex >= colorArray.length ? (colorIndex = 0, colorArray[colorIndex++]) : colorArray[colorIndex++]
		}

		function eventHandler() {
			console.log(getCurrentColor(), ++clickCounter)
		}

		this.init = () => {
			createButton()
			document.getElementById('root').appendChild(button)
			addEventListener()
		}

		this.reset = () => {
			colorIndex = clickCounter = 0
			return 'counters was reseted'
		}

		this.destroy = () => {
			removeEventListener()
			button.remove()
		}
	}

	// 2
	function timeOutCircle(num) {
		for (var i = 0; i <= num; i++) {
			(function(i) {
				setTimeout(() => console.log(i), 1000)
			})(i)
		}
	}

	return {
		CreateTrafficLightButton,
		timeOutCircle
	}
})()