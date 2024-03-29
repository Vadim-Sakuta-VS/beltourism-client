import React from 'react';
import './AboutService.scss';
import Slider from 'react-slick';
import {Slide} from './Slide/Slide';

export const AboutService = () => {

    const animateText = () => {
        let isCanAnimated = true;

        return (indexes) => {
            if (isCanAnimated) {
                let slider = document.getElementsByClassName('about-service-slider')[0];
                let slickSlides = slider.getElementsByClassName('slick-slide');
                let flag = false;

                for (const s of slickSlides) {
                    if (indexes.includes(+s.dataset.index)) {
                        let text = s.getElementsByClassName('slide-text')[0];
                        if (text && !text.classList.contains('transform')) {
                            text.classList.add('transform');
                            flag = true;
                        }
                    }
                }

                if (!flag) {
                    isCanAnimated = false;
                }
            }
        }
    }

    const animText = animateText();

    const settings = {
        dots: false,
        arrows: false,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        className: 'about-service-slider',
        swipe: false,
        onInit: () => {
            let slider = document.getElementsByClassName('about-service-slider')[0];
            let slickCloned = slider.getElementsByClassName('slick-cloned');
            let indexes;
            if (slickCloned) {
                indexes = [0, +slickCloned[1].dataset.index];
            }
            animText(indexes);
        },
        afterChange: (index) => {
            animText([index]);
        }
    };

    return (
        <section className="about-service">
            <div className="about-service__slider-wrap">
                <Slider {...settings}>
                    <Slide
                        bg_url="https://eurasia.expert/upload/resize_cache/iblock/e7d/850_15000_1/e7d0b6d22648132c527047f7c506b794.jpg"
                        text="Незабываемые места."
                    />
                    <Slide
                        bg_url="https://photoclub.by/images/main76/763942_main.jpg"
                        text="Множество различных развлекательных объектов."
                    />
                    <Slide
                        bg_url="https://vostokintur.ru/upload/iblock/f72/f72dc7ad9017fd8c45142e0189f65c03.jpg"
                        text="Архитектурное наследие."
                    />
                    <Slide
                        bg_url="https://cf.bstatic.com/images/hotel/max1280x900/184/184920337.jpg"
                        text="Дорогие и доступные отели."
                    />
                    <Slide
                        bg_url="https://i.pinimg.com/originals/cf/32/3a/cf323a8760ba4d97cd312b46e0820b35.jpg"
                        text="Живописные места."
                    />
                </Slider>
            </div>
            <div className="about-service__text-content">
                <h3 className="about-service__title">О нашем сервисе</h3>
                <p className="about-service__text">
                    BELBOOKING - сервис бронирования услуг предназначен для пользователей, которые планируют путешествия
                    по Беларуси. Данный ресурс предоставляет возможность проанализировать достопримечательности и
                    интересные места в точке назначения, выбрать отель, помогает забронировать туры и транспорт, узнать
                    мнение остальных пользователей и оставить свое, поделиться фотографиями достопримечательностей. Наш
                    сервис , BELLBOKING, позволит забронировать тур, отель, транспорт, место в различных заведениях
                    (кафе, рестораны) и т.д.
                </p>
                <div className="services">
                    <div className="service-item-home">
                        <i className="far fa-check-circle"/>
                        <p className="service-item-home__text">Поиск и просмотр услуг</p>
                    </div>
                    <div className="service-item-home">
                        <i className="far fa-check-circle"/>
                        <p className="service-item-home__text">Бронирование услуг</p>
                    </div>
                    <div className="service-item-home">
                        <i className="far fa-check-circle"/>
                        <p className="service-item-home__text">Добавление услуг в избранное</p>
                    </div>
                    <div className="service-item-home">
                        <i className="far fa-check-circle"/>
                        <p className="service-item-home__text">Отзывы</p>
                    </div>
                </div>
            </div>
        </section>
    );
}