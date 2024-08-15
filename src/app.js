import './app.scss';

import { addHorizontalScroll } from './js/horizontalScroll';

// import insertVideo from './js/insertVideo';
// import addInviewByScroll from './js/addInviewByScroll';

// import data from './data/basic.json';

function start() {
    // const inview = new Inview();
    // const swipers = new Swipers();

    // const videoBlockId = 'video';

    window.addEventListener('load', () => {
        addHorizontalScroll();
        // insertVideo(videoBlockId, data[3].link, data[3].linkPt);
        // addInviewByScroll();
    });
}

start();
