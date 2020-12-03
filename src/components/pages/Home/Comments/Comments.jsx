import React from "react";
import "./Comments.scss";
import Slider from "react-slick";
import {Comment} from "./Comment/Comment";

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
        <i
            className="fas fa-chevron-right arrow-next"
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <i
            className="fas fa-chevron-left arrow-prev"
            onClick={onClick}
        />
    );
}

export const Comments = ({comments}) => {
    const settings = {
        dots: false,
        draggable: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "comments-slider",
        swipe: false,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>
    }

    const commentsElements = comments.map(c => <Comment key={c.id} {...c}/>);

    return (
        <section className="user-comments">
            <div className="container">
                <div className="user-comments__content">
                    <h2 className="user-comments__title">Отзывы пользователей</h2>
                    {
                        commentsElements.length
                            ? <div className="comments">
                                <Slider {...settings}>
                                    {commentsElements}
                                </Slider>
                              </div>
                            : <div className="result-null">На данный момент нет отзывов</div>
                    }
                </div>
            </div>
        </section>
    );
}