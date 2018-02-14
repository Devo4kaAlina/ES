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
			console.log(couter, currentColor < arrColor.length ? arrColor[currentColor++] : (currentColor = 0, arrColor[currentColor++]))
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
			(function(i) {
				setTimeout(function() {
					console.log(i);
				}, 1000);
			})(i);
		}
	} 
	return { CreateTrafficLightButton, timeOutCircle };
})()
	
/*
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
*/
