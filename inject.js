/* 

CSS Color Randomizer

I want to make a Firefox extension that will just randomize the CSS color values that are available on a given webpage. I want crazy colors and wild formatting.

For now, I will limit my scope to changing the font color and the background color to random hex values.

Problem: Webpages are boring
Solution: Change all the text and background colors randomly when you click the button

Look at the CSS
Take down notes of what elements exist
Circle the ones we want (background, color)

For each of the desired elements
Make random number that will fit in 4096 and output in hex
Replace the given color code with new 3 digit hex

Reload the webpage

*/

function getRandomHex(max) {
	var intNumber = Math.floor(Math.random() * Math.floor(max));
	return '#' + intNumber.toString(16);
}

function changeAllColors() {

	var tags = document.getElementsByTagName("*");

	for (var i=0, max=tags.length; i < max; i++) {
		tags[i].style.backgroundColor = getRandomHex(4096);
		tags[i].style.color = getRandomHex(4096);
	}
	setTimeout(changeAllColors, 150)
}

(function() {
	setTimeout(changeAllColors, 150)
})();