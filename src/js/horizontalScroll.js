import Swiper from 'swiper';
import { FreeMode, Mousewheel, Pagination } from 'swiper/modules';

export default class HorizontalScroll {
    swiper = null;
    swiperConfig = {
        direction: 'horizontal',
        freeMode: true,
        slidesPerView: 'auto',
        mousewheel: true,
        keyboard: true,
        touchEventsTarget: 'container',
        touchMoveStopPropagation: true,
        touchReleaseOnEdges: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },

        modules: [FreeMode, Mousewheel, Pagination]
    };

    init = () => {
        if (!this.swiper) this.swiper = new Swiper('#horizontalScroll', this.swiperConfig);
        else this.swiper.enable();
    };
}
