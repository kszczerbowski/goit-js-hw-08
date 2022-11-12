import Player from '@vimeo/player';
const _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));
player.on('timeupdate', _.throttle((currentTime) => {
    const myTime = currentTime.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(myTime));
}, 1000));