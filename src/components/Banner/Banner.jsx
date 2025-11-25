import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // ✅ Correct import
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
const Banner = () => {
    return (
        <div className="w-11/12 mx-auto my-8">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 1000 }}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}

            >
                <SwiperSlide>
                    <div>
                        <div
                            className="hero w-full h-[400px] "
                            style={{
                                backgroundImage:
                                    "url(https://i.ibb.co.com/5hL98kBz/image.png)",
                            }}
                        >
                            <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-4xl font-bold ">Find Your Perfect Home, Effortlessly</h1>
                                    <p className="mb-5">
                                        Browse thousands of rental and sale listings tailored to your lifestyle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div
                            className="hero w-full h-[400px] "
                            style={{
                                backgroundImage:
                                    "url(https://i.ibb.co.com/TxWttxD1/image.png)",
                            }}
                        >
                            <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-4xl font-bold">Discover Homes That Match Your Dreams</h1>
                                    <p className="mb-5">
                                        Search by location, price, and property type — all in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div
                            className="hero w-full h-[400px] "
                            style={{
                                backgroundImage:
                                    'url("https://i.ibb.co.com/5h9cWHXr/image.png")',
                            }}
                        >
                            <div className="hero-overlay"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-4xl font-bold">Your Next Home Is Just One Search Away.</h1>
                                    <p className="mb-5">
                                        Explore verified listings from trusted property owners.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
