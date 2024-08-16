import './app.scss';

import HorizontalScroll from './js/horizontalScroll';
import isPortraitLayout from './js/utils/functions/isPortraitLayout';
import InviewByScroll from './js/utils/InviewByScroll';

// import insertVideo from './js/insertVideo';
// import addInviewByScroll from './js/addInviewByScroll';

// import data from './data/basic.json';

const initAnimation = () => {
    const horizontalScroll = new HorizontalScroll();
    const inviewByScroll = new InviewByScroll();

    const isPt = isPortraitLayout();

    if (!isPt) {
        horizontalScroll.init();
        inviewByScroll.initHorizontalScrollTrigger(horizontalScroll.swiper);
    }

    inviewByScroll.initParallaxLayouts(isPt);
};

const start = () => {
    // const inview = new Inview();
    // const swipers = new Swipers();

    // const videoBlockId = 'video';

    window.addEventListener('load', () => {
        initAnimation();
        // insertVideo(videoBlockId, data[3].link, data[3].linkPt);
        // addInviewByScroll();
    });
};

start();
