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
        if (!isPortraitLayout()) {
            const header = document.querySelector('.new-header');
            const headerHeight = header ? header.offsetHeight : 0;
            const tpl = document.getElementById('tpl');

            tpl.style.setProperty('--header-offset', 1 - (headerHeight / window.innerHeight));
            tpl.style.setProperty('height', `${window.innerHeight - headerHeight}px`);
        }

        initAnimation();
        // insertVideo(videoBlockId, data[3].link, data[3].linkPt);
        // addInviewByScroll();
    });
};

start();
