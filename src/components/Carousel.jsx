
import { Swiper, SwiperSlide } from 'swiper/react';
import bgimg1 from '../assets/images/carousel1.jpg';
import bgimg2 from '../assets/images/carousel2.jpg';
import bgimg3 from '../assets/images/carousel3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={bgimg1} text='Get Your Web Development Projects Done in minutes'> </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg2} text='Get Your Graphics Design Projects Done in minutes.'> </Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={bgimg3} text='Get Your Digital Marketing Projects Done in Minutes '> </Slide>
        </SwiperSlide>


      </Swiper>
    </div>
  );
}
