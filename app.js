//THEME JS FILE VERSION 4
$('head').append('<link href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway:300,500" rel="stylesheet">');


$(document).ready(function () {
	// Check whether vPageParam exists
	// if not, then we are in the local repo
	var productionPage = (typeof (vPageParam) === "undefined") ? "repo" : vPageParam;



	// Just for local repo
	if (productionPage == "repo") {
		// Add logo to page
		$('.m-supernav-logo img').attr('src', '/images/themes/custom/6/63097100/logo.png');
	}

});



//Make the occassion tiles background images instead
if (!Modernizr.objectfit) {
	$(".m-homepage-occasiontile").each(function () {
		var $container = $(this),
			imgUrl = $container.find("img").prop("src");
		if (imgUrl) {
			$container
				.css("backgroundImage", "url(" + imgUrl + ")")
				.addClass("compat-object-fit");
		}
	});
}

//On mobile devices make the occassion tiles full width
let occasiontile = $('.m-homepage-occasiontile');

$(occasiontile).addClass('grid_4').removeClass('grid_2');

$(window).resize(function () {
	if ($(window).width() < 960) {
		if (occasiontile.hasClass('grid_4')) {
			return
		} else {
			occasiontile.addClass('grid_4').removeClass('grid_2');
		}
	}
})

//Create custom version of the four occasion tiles
const fourOccTiles = $('.m-homepage-occasiontile-four .m-homepage-occasiontile');

$('#customFourWideOcc .d-container_12').css("display", "none");

const occFourTileBody = $(`<div class="d-container_12 container_4 clearfix">    
    <div class="l-wrapper no-mobile">
<div class="d-grid_4 firstOcc tall">${fourOccTiles[0].innerHTML}</div>
<div class="d-grid_4 secondOcc">
<div class="grid_4 short">${fourOccTiles[1].innerHTML}</div>
<div class="spaceCreate grid_4"></div>
<div class="grid_4 short">${fourOccTiles[2].innerHTML}</div>
</div>
<div class="d-grid_4 thirdOcc tall">${fourOccTiles[3].innerHTML}</div>
	</div>
</div>`)

$('#customFourWideOcc').append(occFourTileBody);

//Creates the mobile version of the four occasion tiles
const customH3Content = $('.firstOcc h3, .secondOcc h3, .thirdOcc h3');
const customH3Links = $('.firstOcc a, .secondOcc a, .thirdOcc a');
const mobileHeaderH3Content = $(`<div class="no-desktop header-h3-content">
	<div class="grid_4 no-desktop"><a href="${customH3Links[0].href}">${customH3Content[0].innerHTML}</a></div>
	<div class="grid_4 no-desktop"><a href="${customH3Links[1].href}">${customH3Content[1].innerHTML}</a></div>
	<div class="grid_4 no-desktop"><a href="${customH3Links[2].href}">${customH3Content[2].innerHTML}</a></div>
	<div class="grid_4 no-desktop"><a href="${customH3Links[3].href}">${customH3Content[3].innerHTML}</a></div>
</div>`);

$(occFourTileBody).append(mobileHeaderH3Content)

//Makes the images for the four occasion tiles background images
if (!Modernizr.objectfit) {
	$(".fourWideOcc .tall").each(function () {
		var $container = $(this),
			imgUrl = $container.find("img").prop("src");
		if (imgUrl) {
			$container
				.css("backgroundImage", "url(" + imgUrl + ")")
				.addClass("compat-object-fit");
		}
	});
}

if (!Modernizr.objectfit) {
	$(".fourWideOcc .short").each(function () {
		var $container = $(this),
			imgUrl = $container.find("img").prop("src");
		if (imgUrl) {
			$container
				.css("backgroundImage", "url(" + imgUrl + ")")
				.addClass("compat-object-fit");
		}
	});
}


//create custom footer 
const footerContent = $('.m-footer .d-container_12 .grid_2')
const footerLogo = $('.large-logo-colorbar .m-supernav-logo figure.fluid img');

const newFooter = $(`<div class="d-container_12 container_4 clearfix">
<div class="l-wrapper">
  <div class="d-grid_6 grid_4 footer-logo"><img src="${footerLogo[0].src}"></div>
  <div class="d-grid_6 grid_4 footer-link-text">
	  <div class="d-grid_4 grid_1">${footerContent[0].innerHTML}</div>
	  <div class="d-grid_4 grid_1">${footerContent[1].innerHTML}</div>
	  <div class="d-grid_4 grid_1">${footerContent[2].innerHTML}</div>
  </div>
  </div>
</div>`);

$('.m-footer').append(newFooter);

let removeFooterElements = $('.m-footer .d-container_12');

for (let i = 0; i <= 2; i++) {
	removeFooterElements[i].style = "display: none";
}

