document.addEventListener('DOMContentLoaded', function () {
    // navbar
    var Sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(Sidenav, {});
    // carousel
    var slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });
    // AutoComplete
    var ac = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
            "aruba": null,
            "mexico": null,
            "itlay": null,
            "Hawaii": null,
            "Berlin": null,
            "Cario": null,
            "new Dellhia": null,
        }
    });

    // Gallery 
    var ma = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(ma, {});

    // scrollspy
    var ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {})


});



//Loading
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
});
//Loading
document.addEventListener("DOMContentLoaded", function(){
    $('#home').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});
});



