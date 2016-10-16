var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var imgs = document.getElementsByClassName("gif");
var animatedImage = "img/animate.gif";
var pausedImage = "img/sad-cat.jpg";

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'j5wvPuXrhSQ',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('player').style.borderColor = '#FF6D00';
    imgs[0].src = pausedImage;
    imgs[1].src = pausedImage;
    clearInterval(spinning);
}

function changeBorderColor(playerStatus) {
    var color;
    if (playerStatus == -1) {
        color = "#37474F"; // unstarted = gray
    } else if (playerStatus == 0) {
        color = "#FFFF00"; // ended = yellow
    } else if (playerStatus == 1) {
        color = "#33691E"; // playing = green
        imgs[0].src = animatedImage;
        imgs[1].src = animatedImage;
        spin();
    } else if (playerStatus == 2) {
        color = "#DD2C00"; // paused = red
        imgs[0].src = pausedImage;
        imgs[1].src = pausedImage;
        clearInterval(spinning);
    } else if (playerStatus == 3) {
        color = "#AA00FF"; // buffering = purple
    } else if (playerStatus == 5) {
        color = "#FF6DOO"; // video cued = orange
    }
    if (color) {
        document.getElementById('player').style.borderColor = color;
    }
}

function onPlayerStateChange(event) {
    changeBorderColor(event.data);
}

function stopVideo() {
    player.stopVideo();
}