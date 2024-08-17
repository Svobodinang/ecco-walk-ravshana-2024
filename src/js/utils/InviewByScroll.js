import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class {
    scrollTriggers = null;

    // eslint-disable-next-line
    initHorizontalScrollTrigger(swiper) {
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
    }

    initParallaxLayouts(isPt) {
        this.scrollTriggers = [];
        const parallaxLayouts2 = document.getElementById('tpl').querySelectorAll('.inview-by-scroll');

        const params = {
            horizontal: !isPt,
            start: isPt ? 'top bottom' : 'left right',
            end: isPt ? 'bottom top' : 'right left'
        };

        Array.from(parallaxLayouts2).forEach((el) => {
            this.scrollTriggers.push(ScrollTrigger.create({
                trigger: el,
                ...params,
                onUpdate: ({ trigger, progress }) => {
                    trigger.style.setProperty('--parallax-progress', progress);
                }
            }));
        });

        this.scrollTriggers.push(ScrollTrigger.create({
            trigger: '#video',
            ...params,
            start: isPt ? 'top 50%' : 'left 50%',
            onEnter: ({ trigger }) => {
                trigger.play();
            },
            onLeaveBack: ({ trigger }) => {
                trigger.pause();
            }
        }));
    }
}
