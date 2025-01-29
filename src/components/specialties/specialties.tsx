"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './specialties.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SpecialtyCard {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

const specialtyCards: SpecialtyCard[] = [
  {
    title: 'Cardiologia',
    description: '',
    imageUrl: '/assets/Cardiologia.jpg',
    alt: 'Serviços de cardiologia'
  },
  {
    title: 'pediatria',
    description: '',
    imageUrl: '/assets/pediatria.jpeg',
    alt: 'Serviços de cardiologia'
  },
  {
    title: 'Ginecologia',
    description: '',
    imageUrl: '/assets/ginecologia.jpg',
    alt: 'Serviços de cardiologia'
  },
  {
    title: 'Fonoaudiologia',
    description: '',
    imageUrl: '/assets/Fonoaudiologia.png',
    alt: 'Serviços de cardiologia'
  },
  {
    title: 'Fisioterapia',
    description: '',
    imageUrl: '/assets/fisio.png',
    alt: 'Serviços de cardiologia'
  },
  {
    title: 'Nutricionista',
    description: '',
    imageUrl: '/assets/nutri.jpg',
    alt: 'Serviços de cardiologia'
  },
  
];

export function Specialties() {
    return (
        <section className={styles.specialties_section}>
            <div className={styles.specialties_title}>
                <h2>Especialidades</h2>
            </div>
            <div className={styles.specialties_grid}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    className={styles.specialties_slider}
                >
                    {specialtyCards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.specialty_card}>
                                <div className={styles.image_container}>
                                    <Image
                                        src={card.imageUrl}
                                        alt={card.alt}
                                        width={400}
                                        height={300}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}