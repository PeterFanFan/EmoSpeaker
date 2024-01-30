window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE1 = "./static/hdtf_video";
var NUM_INTERP_FRAMES1 = 45;
var interp_videos1 = [];

var INTERP_BASE2 = "./static/obama_video";
var NUM_INTERP_FRAMES2 = 105;
var interp_videos2 = [];


function preloadInterpolationVideos1() {
	for (var i = 0; i < NUM_INTERP_FRAMES1; i++) {
		var path = INTERP_BASE1 + '/' + String(i).padStart(6, '0') + '.mp4';
		interp_videos1[i] = document.createElement('video');
		interp_videos1[i].src = path;
		interp_videos1[i].type = 'video/mp4';
		interp_videos1[i].controls = false; // 取消控制条
		interp_videos1[i].autoplay  = true;
		interp_videos1[i].muted  = true;
		interp_videos1[i].loop  = true;
		interp_videos1[i].playsinline = true;
	}
}

function preloadInterpolationVideos2() {
	for (var i = 0; i < NUM_INTERP_FRAMES2; i++) {
		var path = INTERP_BASE2 + '/' + String(i).padStart(6, '0') + '.mp4';
		interp_videos2[i] = document.createElement('video');
		interp_videos2[i].src = path;
		interp_videos2[i].type = 'video/mp4';
		interp_videos2[i].controls = false; // 取消控制条
		interp_videos2[i].autoplay  = true;
		interp_videos2[i].muted  = true;
		interp_videos2[i].loop  = true;
		interp_videos2[i].playsinline = true;
	}
}

function setInterpolationVideo11(i) {
	var video = interp_videos1[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper1').empty().append(video);
	$('#interpolation-video-wrapper1 video').get(0).play();
	$("#teaser11-hdtf").get(0).currentTime = 0;
	$("#teaser11-hdtf").get(0).play();
	$("#teaser12-hdtf").get(0).currentTime = 0;
	$("#teaser12-hdtf").get(0).play();
}

function setInterpolationVideo12(i) {
	var video = interp_videos1[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper2').empty().append(video);
	$('#interpolation-video-wrapper2 video').get(0).play();
	$("#teaser21-hdtf").get(0).currentTime = 0;
	$("#teaser21-hdtf").get(0).play();
	$("#teaser22-hdtf").get(0).currentTime = 0;
	$("#teaser22-hdtf").get(0).play();
}

function setInterpolationVideo13(i) {
	var video = interp_videos1[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper3').empty().append(video);
	$('#interpolation-video-wrapper3 video').get(0).play();
	$("#teaser31-hdtf").get(0).currentTime = 0;
	$("#teaser31-hdtf").get(0).play();
	$("#teaser32-hdtf").get(0).currentTime = 0;
	$("#teaser32-hdtf").get(0).play();
}

function setInterpolationVideo21(i) {
	var video = interp_videos2[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper21').empty().append(video);
	$('#interpolation-video-wrapper21 video').get(0).play();
	$("#teaser111").get(0).currentTime = 0;
	$("#teaser111").get(0).play();
	$("#teaser112").get(0).currentTime = 0;
	$("#teaser112").get(0).play();
}

function setInterpolationVideo22(i) {
	var video = interp_videos2[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper22').empty().append(video);
	$('#interpolation-video-wrapper22 video').get(0).play();
	$("#teaser211").get(0).currentTime = 0;
	$("#teaser211").get(0).play();
	$("#teaser212").get(0).currentTime = 0;
	$("#teaser212").get(0).play();
}

function setInterpolationVideo23(i) {
	var video = interp_videos2[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper23').empty().append(video);
	$('#interpolation-video-wrapper23 video').get(0).play();
	$("#teaser311").get(0).currentTime = 0;
	$("#teaser311").get(0).play();
	$("#teaser312").get(0).currentTime = 0;
	$("#teaser312").get(0).play();
}

function setInterpolationVideo24(i) {
	var video = interp_videos2[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper24').empty().append(video);
	$('#interpolation-video-wrapper24 video').get(0).play();
	$("#teaser411").get(0).currentTime = 0;
	$("#teaser411").get(0).play();
	$("#teaser412").get(0).currentTime = 0;
	$("#teaser412").get(0).play();
}

function setInterpolationVideo25(i) {
	var video = interp_videos2[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper25').empty().append(video);
	$('#interpolation-video-wrapper25 video').get(0).play();
	$("#teaser511").get(0).currentTime = 0;
	$("#teaser511").get(0).play();
	$("#teaser512").get(0).currentTime = 0;
	$("#teaser512").get(0).play();
}

function setInterpolationVideo26(i) {
	var video = interp_videos2[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper26').empty().append(video);
	$('#interpolation-video-wrapper26 video').get(0).play();
	$("#teaser611").get(0).currentTime = 0;
	$("#teaser611").get(0).play();
	$("#teaser612").get(0).currentTime = 0;
	$("#teaser612").get(0).play();
}

function setInterpolationVideo27(i) {
	var video = interp_videos2[i];
	video.ondragstart = function() { return false; };
	video.oncontextmenu = function() { return false; };
	$('#interpolation-video-wrapper27').empty().append(video);
	$('#interpolation-video-wrapper27 video').get(0).play();
	$("#teaser711").get(0).currentTime = 0;
	$("#teaser711").get(0).play();
	$("#teaser712").get(0).currentTime = 0;
	$("#teaser712").get(0).play();
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    preloadInterpolationVideos1();
	preloadInterpolationVideos2();

	// hdtf
    $('#interpolation-slider1').on('input', function(event) {
    	setInterpolationVideo11(this.value);
    });
    setInterpolationVideo11(0);
    $('#interpolation-slider1').prop('max', 14);

	$('#interpolation-slider2').on('input', function(event) {
    	setInterpolationVideo12(this.value);
    });
    setInterpolationVideo12(15);
    $('#interpolation-slider2').prop('max', 29);

	$('#interpolation-slider3').on('input', function(event) {
    	setInterpolationVideo13(this.value);
    });
    setInterpolationVideo13(30);
    $('#interpolation-slider3').prop('max', 44);

	// obama
	$('#interpolation-slider21').on('input', function(event) {
    	setInterpolationVideo21(this.value);
    });
    setInterpolationVideo21(0);
    $('#interpolation-slider21').prop('max', 14);

	$('#interpolation-slider22').on('input', function(event) {
    	setInterpolationVideo22(this.value);
    });
    setInterpolationVideo22(15);
    $('#interpolation-slider22').prop('max', 29);

	$('#interpolation-slider23').on('input', function(event) {
    	setInterpolationVideo23(this.value);
    });
    setInterpolationVideo23(30);
    $('#interpolation-slider23').prop('max', 44);

	$('#interpolation-slider24').on('input', function(event) {
    	setInterpolationVideo24(this.value);
    });
    setInterpolationVideo24(45);
    $('#interpolation-slider24').prop('max', 59);

	$('#interpolation-slider25').on('input', function(event) {
    	setInterpolationVideo25(this.value);
    });
    setInterpolationVideo25(60);
    $('#interpolation-slider25').prop('max', 74);

	$('#interpolation-slider26').on('input', function(event) {
    	setInterpolationVideo26(this.value);
    });
    setInterpolationVideo26(75);
    $('#interpolation-slider26').prop('max', 89);

	$('#interpolation-slider27').on('input', function(event) {
    	setInterpolationVideo27(this.value);
    });
    setInterpolationVideo27(90);
    $('#interpolation-slider27').prop('max', 104);

    bulmaSlider.attach();
})