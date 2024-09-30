const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const trackTitle = document.getElementById('track-title');

playButton.addEventListener('click', () => {
    audio.play();
    trackTitle.textContent = "Playing: Admirin' You";
});

pauseButton.addEventListener('click', () => {
    audio.pause();
    trackTitle.textContent = "Paused:  Admirin' You";
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    trackTitle.textContent = "Stopped:  Admirin' You";
});