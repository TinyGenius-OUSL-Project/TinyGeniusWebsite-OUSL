const video = document.getElementById('intro-video');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');
const skipButton = document.getElementById('skip-button');

// Play the video
playButton.addEventListener('click', () => {
    video.play();
});

// Pause the video
pauseButton.addEventListener('click', () => {
    video.pause();
});

// Stop the video
stopButton.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
});

// Skip the video
skipButton.addEventListener('click', () => {
    document.querySelector('.video-container').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
});

// Adjust playback speed by clicking on video sides
video.addEventListener('click', (e) => {
    const rect = video.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left; // Get click position relative to video
    const videoWidth = rect.width;

    if (clickPosition > videoWidth / 2) {
        // Clicked on the right side, increase speed
        video.playbackRate += 0.25;
    } else {
        // Clicked on the left side, decrease speed
        video.playbackRate = Math.max(0.25, video.playbackRate - 0.25);
    }
});