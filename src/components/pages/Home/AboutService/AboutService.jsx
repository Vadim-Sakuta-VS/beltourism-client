import React from "react";
import "./AboutService.scss";
import Slider from "react-slick";
import {Slide} from "./Slide/Slide";
import {POPUPS_FORMS} from "../../../../constants/constants";

export const AboutService = ({setPopupInfo}) => {

    const animateText = () => {
        let isCanAnimated = true;

        return (indexes) => {
            if (isCanAnimated) {
                let slider = document.getElementsByClassName("about-service-slider")[0];
                let slickSlides = slider.getElementsByClassName("slick-slide");
                let flag = false;

                for (const s of slickSlides) {
                    if (indexes.includes(+s.dataset.index)) {
                        let text = s.getElementsByClassName("slide-text")[0];
                        if (text && !text.classList.contains("transform")) {
                            text.classList.add("transform");
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
        className: "about-service-slider",
        swipe: false,
        onInit: () => {
            let slider = document.getElementsByClassName("about-service-slider")[0];
            let slickCloned = slider.getElementsByClassName("slick-cloned");
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
                        text="Какой-нибудь текст."
                    />
                    <Slide
                        bg_url="https://photoclub.by/images/main76/763942_main.jpg"
                        text="Какой-нибудь текст."
                    />
                    <Slide
                        bg_url="https://vostokintur.ru/upload/iblock/f72/f72dc7ad9017fd8c45142e0189f65c03.jpg"
                        text="Какой-нибудь текст."
                    />
                    <Slide
                        bg_url="https://cf.bstatic.com/images/hotel/max1280x900/184/184920337.jpg"
                        text="Какой-нибудь текст."
                    />
                    <Slide
                        bg_url="https://i.pinimg.com/originals/cf/32/3a/cf323a8760ba4d97cd312b46e0820b35.jpg"
                        text="Какой-нибудь текст."
                    />
                </Slider>
            </div>
            <div className="about-service__text-content">
                <h3 className="about-service__title">О нашем сервисе</h3>
                <p className="about-service__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores est fugit
                    similique vero? Commodi cupiditate eligendi eveniet minus pariatur reiciendis sint
                    voluptate! Adipisci amet atque cupiditate ex qui rem. (Какой-нибудь текст)
                </p>
                <p className="about-service__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores est fugit
                    similique vero? Commodi cupiditate eligendi eveniet minus pariatur reiciendis sint
                    voluptate! Adipisci amet atque cupiditate ex qui rem. (Какой-нибудь текст)
                </p>
                <div className="services">
                    <div className="service-item">
                        <i className="far fa-check-circle"></i>
                        <p className="service-item__text">Поиск и просмотр услуг</p>
                    </div>
                    <div className="service-item">
                        <i className="far fa-check-circle"></i>
                        <p className="service-item__text">Бронирование услуг</p>
                    </div>
                </div>
                <div>...</div>
                {/*delete*/}
                <p className="about-service__count-users">
                    Более <span className="count">(Х)</span> зарегистрированных поьзователей.
                </p>
                <p className="about-service__conclusion">
                    <span
                        className="conclusion-first"
                        onClick={()=>setPopupInfo({activeForm: POPUPS_FORMS.REGISTRATION, fromForm: ""})}
                    >
                        Регистрируйся
                    </span> прямо сейчас, чтобы полнеценно пользоваться сервисом.
                </p>
            </div>
        </section>
    );
}