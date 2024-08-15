import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Swiper from 'swiper';
import { FreeMode, Mousewheel } from 'swiper/modules';
import isPortraitLayout from './utils/functions/isPortraitLayout';

gsap.registerPlugin(ScrollTrigger);

const swiperConfig = {
    direction: 'horizontal',
    freeMode: true,
    slidesPerView: 'auto',
    mousewheel: true,
    keyboard: true,
    touchEventsTarget: 'container',
    touchMoveStopPropagation: true,
    touchReleaseOnEdges: true,

    modules: [FreeMode, Mousewheel]
};

const isPt = isPortraitLayout();

const initHorizontalScroll = () => {
    const swiper = new Swiper('#horizontalScroll', swiperConfig);

    ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop() {
            return 0 - swiper.translate;
        },
        scrollLeft() {
            return 0 - swiper.translate;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    swiper.on('progress', () => {
        ScrollTrigger.update();
    });
};

const initParallaxLayouts = () => {
    const scrollTriggers = [];

    const parallaxLayouts2 = document.getElementById('tpl').querySelectorAll('.parallax-layout');

    Array.from(parallaxLayouts2).forEach((el) => {
        scrollTriggers.push(ScrollTrigger.create({
            trigger: el,
            horizontal: !isPt,
            start: isPt ? 'top bottom' : 'left right',
            end: isPt ? 'bottom top' : 'right left',
            onUpdate: ({ trigger, progress }) => {
                trigger.style.setProperty('--parallax-progress', progress);
            }
        }));
    });
};

export const addHorizontalScroll = () => {
    if (!isPt) {
        initHorizontalScroll();
    }

    setTimeout(() => {
        initParallaxLayouts();
    }, 0);
};
