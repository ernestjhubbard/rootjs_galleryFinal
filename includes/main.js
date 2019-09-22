/* your javascript goes here */
$(document).ready(initiateApp);
var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg',
];
function initiateApp() {
	/*advanced: add jquery sortable call here to make the gallery able to be sorted
			//on change, rebuild the images array into the new order
	*/

	$('#gallery').sortable({
		'stop': changeArray,
		'serialize'
	});
	makeGallery(pictures);
	addModalCloseHandler();
}

function changeArray() {
	var newArray = $('#gallery').sortable('toArray', {
		'attribute': 'style'
	});
	for (var images = 0; images < newArray.length; images++) {
		var index = newArray[images].lastIndexOf('images');
		var end = newArray[images].lastIndexOf('")');
		var sliced = newArray[images].slice(index, end);
		newArray[images] = sliced;
	}
	console.log(newArray);
}
function makeGallery(imageArray) {
	//use loops and jquery dom creation to make the html structure inside the #gallery section
	//create a loop to go through the images in the imageArray
	//create the elements needed for each picture, store the elements in variable
	//attach a click handler to the figure you create.  call the "displayImage" function.
	//append the element to the #gallery section
	// side note: make sure to remove the hard coded html in the index.html when you are done!
	for (var image = 0; image < imageArray.length; image++) {
		var imgFig = $('<figure>');
		imgFig.addClass("imageGallery col-xs-12 col-sm-6 col-md-4");
		imgFig.css('background-image', "url(" + imageArray[image] + ")");
		var imgCap = $('<figcaption>');
		imgCap.text(imageArray[image])
		imgCap.css({
			'color': 'tomato'
		});
		imgFig.append(imgCap);
		$('#gallery').append(imgFig);
	}
	$('#gallery>figure').on('click', displayImage);
}

function addModalCloseHandler() {
	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
	$(".modal-body>img").click(function () {
		$("#galleryModal").modal("hide");
	});
}
function displayImage() {
	var picUrl = $(this).css("background-image");
	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need
	var index = picUrl.lastIndexOf('images');
	var sliced = picUrl.slice(index);
	var slicedImages = sliced.slice(7);
	var dotFound = slicedImages.lastIndexOf('.');
	var slicedDot = slicedImages.slice(0, dotFound);
	console.log(dotFound);
	console.log(slicedDot);
	$('.modal-title').text(slicedDot);
	var slicedAgain = sliced.slice(0, -2);
	$('div>img').attr('src', slicedAgain);
	$("#galleryModal").modal("show");

	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become pexels-photo-132037
	//take a look at the lastIndexOf method
	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on
	//show the modal with JS.  Check for more info here:
}
