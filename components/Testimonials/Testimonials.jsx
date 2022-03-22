import React from 'react';
import styles from "./Testimonials.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import {BsArrowLeftShort} from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

const Testimonials = () => {
    return (
        <section id={"testimonials"} className={styles.MainContainer}>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>

            <div className={"prev"}>
                <BsArrowLeftShort className={styles.icon}/>
            </div>

            <Swiper
                modules={[Pagination, Navigation]}
                slidesPerView={1}
                navigation={{
                    prevEl: ".prev",
                    nextEl: ".next"
                }}
                pagination={{ clickable: true }}
                className={styles.container}
            >
                <SwiperSlide className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image src={"/images/me.JPG"} className={styles.image} layout={"fill"} objectFit={"cover"}/>
                    </div>

                    <h4 className={styles.name}>Ernest Achiever</h4>
                    <small className={styles.review}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cumque,
                        dolor doloribus dolorum eius exercitationem illum iure magnam maiores molestiae, obcaecati porro
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                    </small>
                </SwiperSlide>

                <SwiperSlide className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image src={"/images/me.JPG"} className={styles.image} layout={"fill"} objectFit={"cover"}/>
                    </div>

                    <h4 className={styles.name}>Sikal Sikal</h4>
                    <small className={styles.review}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cumque,
                        dolor doloribus dolorum eius exercitationem illum iure magnam maiores molestiae, obcaecati porro
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                    </small>
                </SwiperSlide>

                <SwiperSlide className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image src={"/images/me.JPG"} className={styles.image} layout={"fill"} objectFit={"cover"}/>
                    </div>

                    <h4 className={styles.name}>Ernest Achiever</h4>
                    <small className={styles.review}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cumque,
                        dolor doloribus dolorum eius exercitationem illum iure magnam maiores molestiae, obcaecati porro
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                    </small>
                </SwiperSlide>

                <SwiperSlide className={styles.item}>
                    {/*image*/}
                    <div className={styles.imageContainer}>
                        <Image src={"/images/me.JPG"} className={styles.image} layout={"fill"} objectFit={"cover"}/>
                    </div>

                    <h4 className={styles.name}>Olaniyan Tooni</h4>
                    <small className={styles.review}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur cumque,
                        dolor doloribus dolorum eius exercitationem illum iure magnam maiores molestiae, obcaecati porro
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                        quibusdam sapiente sint tenetur velit veritatis vitae.
                    </small>
                </SwiperSlide>
            </Swiper>

            <div className={"next"}>
                <BsArrowRightShort className={styles.icon} />
            </div>

        </section>
    );
};

export default Testimonials;