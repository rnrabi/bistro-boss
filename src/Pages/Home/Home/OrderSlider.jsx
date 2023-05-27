import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';
import slide4 from '../../../assets/slide4.jpg';
import slide5 from '../../../assets/slide5.jpg';
import SectionTitle from "../../../Components/SectionTitle";

const OrderSlider = () => {
    return (
        <section>
            <SectionTitle 
             subHeading ={"Don't miss"}
             heading={"today's offer"}
            >

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-6"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-center text-4xl text-white-200 -mt-16 uppercase">Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-center text-4xl text-white-200 -mt-16 uppercase">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-center text-4xl text-white-200 -mt-16 uppercase">Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-center text-4xl text-white-200 -mt-16 uppercase">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-center text-4xl text-white-200 -mt-16 uppercase">Salad</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default OrderSlider;