var video = document.querySelector("#player1");
var oldSchool = document.querySelector("#oldSchoolClass")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto Play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	video.playbackRate *= 0.9;
	console.log("Speed is now " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate /= 0.9;
	console.log("Speed is now " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 10;
	}

	console.log("Current location is " + video.currentTime + " seconds")
});

document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted == true) {
		console.log("Unmute");
		video.muted = false;
		this.innerText = "Mute";
	}
	else {
		console.log("Mute");
		video.muted = true;
		this.innerText = "Unmute";
	}
	
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Apply old school class")


});