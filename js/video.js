var video = document.querySelector("#player1");

/* loads the window */
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto Play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)

});

/* plays the video */
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play();
});

/* pauses the video */
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

/* slows the video down 10% */
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	video.playbackRate *= 0.9;
	console.log("Speed is now " + video.playbackRate)
});

/* speeds the video up 10% */
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate /= 0.9;
	console.log("Speed is now " + video.playbackRate)
});

/* skips ahead 10 seconds in the video or restarts if time exceeds length of video */
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = video.currentTime + 10;
	}

	console.log("Current location is " + video.currentTime + " seconds")
});

/* mutes/unmutes the video */ 
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

/* changes the volume based on the slider and updates the volume information */
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = document.querySelector("#slider").value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

/* adds the old school class to video */
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");

});

/* removes the old school class from video */
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");

});