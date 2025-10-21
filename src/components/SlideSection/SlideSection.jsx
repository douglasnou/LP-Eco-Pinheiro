import { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import Img01 from "../../assets/01.png";
import Img02 from "../../assets/02.png";
import Img03 from "../../assets/03.png";
import Img04 from "../../assets/04.png";
import Img05 from "../../assets/05.png";
import Img06 from "../../assets/06.png";
import Img07 from "../../assets/07.png";
import Img08 from "../../assets/08.png";

import ImageModal from '../ImageModal/ImageModal';
import styled from "./style.module.scss";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const SlideSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        { src: Img01, alt: "Espaço 1" },
        { src: Img02, alt: "Espaço 2" },
        { src: Img03, alt: "Espaço 3" },
        { src: Img04, alt: "Espaço 4" },
        { src: Img05, alt: "Espaço 5" },
        { src: Img06, alt: "Espaço 6" },
        { src: Img07, alt: "Espaço 7" },
        { src: Img08, alt: "Espaço 8" },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <section className={styled.slideSection}>
            <div className={styled.container}>
                <h2>Cada espaço pensado para você!</h2>
                <span>Clique nas imagens para visualizar</span>
                <Swiper
                    className={styled.imgContainer}
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation={false}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    breakpoints={{
                        // Responsividade
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50
                        }
                    }}
                >
                    {images.map((item, index) => (
                        <SwiperSlide 
                            key={index} 
                            className={styled.imgCard}
                            onClick={() => openModal(item)}
                        >
                            <img 
                                src={item.src} 
                                alt={item.alt}
                                className={styled.slideImage}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ImageModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    imageUrl={selectedImage?.src}
                    altText={selectedImage?.alt}
                />
            </div>
        </section>
    )
}