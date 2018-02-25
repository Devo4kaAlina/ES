/**
* №1
*/
function returnString (string) {
	var str = string || '',
		count = str.length,
		newStr = '',
		i = 0;
	var eachString = setInterval(function(){
		console.log(i, newStr+=str[i])
		if(i >= count - 1) {
			clearInterval(eachString)
		}
		i++;
	}, 200)
}
returnString('test');

/**
* №2
*/

function timerFunc(name, time) {
	var name = name || 'dafault',
		delay = time || 10;
	setTimeout(function(){
		console.log(name)
	}, delay)
}
timerFunc('test', 1000);

/**
* №3
*/
function PhotoGallery(name,images) {
	this._name = name || 'gallery',
	this._images = images || [];
	if (!this._images.length) {
		throw new Error('where is your images?')
		return
	}
}
PhotoGallery.prototype.getImageByIndex = function(index) {
	if (this._images && this._images.length) {
		return this._images[index]
	}
}
PhotoGallery.prototype.getName = function () {
	return 'This is an amazing with' + this._images.length + 'images'
}
const gallery = new PhotoGallery('slider', ['img1', 'img2', 'img3', 'img4'])
console.log(gallery.getName())
