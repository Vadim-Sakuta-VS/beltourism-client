import React, {useEffect} from "react";
import "./Home.scss";
import {Stocks} from "../../Stocks/Stocks";
import {AboutService} from "./AboutService/AboutService";
import {Comments} from "./Comments/Comments";
import {initHomePage} from "../../../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {PageWrapper} from "../PageWrapper";

export const Home = ({setPopupInfo, isShowingPageLoader})=>{
    const dispatch = useDispatch();
    const stocks = useSelector(state => state.home.stocks);
    const comments = useSelector(state => state.home.comments);

    useEffect(()=>{
        dispatch(initHomePage());
    }, []);

    return (
        <PageWrapper isShowingPageLoader={isShowingPageLoader}>
            <section className="home">
                <AboutService setPopupInfo={setPopupInfo}/>
                <section className="popular-stocks">
                    <div className="container">
                        <div className="popular-stocks__content">
                            <h2 className="popular-stocks__title">Популярные акции</h2>
                            {
                                stocks.length
                                    ? <Stocks stocks={stocks}/>
                                    : <div className="result-null">На данный момент нет акций</div>
                            }
                        </div>
                    </div>
                </section>
                <section className="service-icons">
                    <div className="container">
                        <div className="service-icons__content">
                            <div className="wrap-icon">
                                <div className="icon">
                                    <i className="fas fa-house-user"/>
                                </div>
                            </div>
                            <div className="wrap-icon">
                                <div className="icon">
                                    <i className="fas fa-car-alt"/>
                                </div>
                            </div>
                            <div className="wrap-icon">
                                <div className="icon">
                                    <i className="fas fa-route"/>
                                </div>
                            </div>
                            <div className="wrap-icon">
                                <div className="icon">
                                    <i className="fas fa-icons"/>
                                </div>
                            </div>
                            <div className="wrap-icon">
                                <div className="icon">
                                    <i className="fas fa-utensils"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Comments comments={comments}/>
            </section>
        </PageWrapper>
    );
}