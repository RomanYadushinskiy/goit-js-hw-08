import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay ({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds)
};

setCurrentTime();
function setCurrentTime() {
    if(localStorage.getItem(STORAGE_KEY)) {
        player.setCurrentTime(localStorage.getItem(STORAGE_KEY))
    };
    
};

