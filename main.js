document.addEventListener('DOMContentLoaded', () => {
    const AudioPlayer = document.getElementById('music-player');
    const Volume = 1;
    const tracks = ['track.mp3', 'track1.mp3', 'track3.mp3', 'track4.mp3', 'track5.mp3', 'track6.mp3'];
    
    let currentTrackIndex = Math.floor(Math.random() * tracks.length); 

    if (AudioPlayer) {
        AudioPlayer.volume = Volume;
        AudioPlayer.src = tracks[currentTrackIndex];
    }

    function playNextTrack() {
        
        let nextTrackIndex;
        do {
            nextTrackIndex = Math.floor(Math.random() * tracks.length);
        } while (nextTrackIndex === currentTrackIndex);

        currentTrackIndex = nextTrackIndex;
        AudioPlayer.src = tracks[currentTrackIndex]; 
        AudioPlayer.play()
            .then(() => console.log('Playing track:', AudioPlayer.src))
            .catch(err => {
                console.warn('Audio playback issue:', err);
            });
    }

    window.enterSite = function() {
        const overlay = document.getElementById('enter-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            if (AudioPlayer) {
                AudioPlayer.play()
                    .then(() => console.log('Playing track:', AudioPlayer.src))
                    .catch(err => {
                        console.warn('Audio playback issue:', err);
                    });
            }
        }
    };

    if (AudioPlayer) {
        AudioPlayer.addEventListener('ended', playNextTrack);
    }

    const titles = ['#', '#S', '#Sw', '#Swa', '#Swat', '#Swats', '#Swats!', '#Swats!u', '#Swats!un', '#Swats!unt', '#Swats!unti', '#Swats!until', '#Swats!until#', '#Swats!until#d', '#Swats!until#de', '#Swats!until#dea', '#Swats!until#deat', '#Swats!until#death', '#Swats!until#deat', '#Swats!until#dea', '#Swats!until#de', '#Swats!until#d', '#Swats!until#', '#Swats!until', '#Swats!unti', '#Swats!unt', '#Swats!un', '#Swats!u', '#Swats!', '#Swats', '#Swat', '#Swa', '#Sw', '#S', '#'];

    let index = 0;

    function changeTitle() {
        document.title = titles[index];
        index = (index + 1) % titles.length;
        setTimeout(changeTitle, 200);
    }
    changeTitle();

    const nextParticle = new NextParticle({
        image: document.getElementById("logo"),
        width: window.innerWidth,
        height: window.innerHeight * 0.8,
        maxWidth: Math.min(window.innerWidth * 0.8, 400),
        particleGap: 4,
        velocity: 0.5,
        proximity: 100,
        mouseForce: 300,
        color: "#FFFFFF", 
    });

    function resizeParticle() {
        nextParticle.width = window.innerWidth;
        nextParticle.height = window.innerHeight * 0.8;
        nextParticle.maxWidth = Math.min(window.innerWidth * 0.8, 400);
        nextParticle.start();
    }

    window.onresize = resizeParticle;
    resizeParticle();
});
