import React from "react";
import "./Home.scss";
import {Stocks} from "../../Stocks/Stocks";
import {AboutService} from "./AboutService/AboutService";
import {Comments} from "./Comments/Comments";

export const Home = ()=>{
    const testDataStocks = [
        {
            id: 1,
            service_name: "Аренда Volkswagen Tiguan",
            img_url: "https://dh.img.tam.by/320x218s/offers/0e/0/8fc9e3e25a7b85b390b45ae9b29c57e0-2.jpg",
            discount: 30,
            location: "Минск",
            mark: 9.1,
            price: 100
        },
        {
            id: 2,
            service_name: "Гродненский государственный музей истории религии",
            img_url: "https://ekskursii.by/images/obj3/102139/c18he5_3_true.jpg",
            discount: 20,
            location: "Гродно",
            mark: 8.5,
            price: 12
        },
        {
            id: 3,
            service_name: "Аренда Volkswagen Tiguan",
            img_url: "https://dh.img.tam.by/320x218s/offers/0e/0/8fc9e3e25a7b85b390b45ae9b29c57e0-2.jpg",
            discount: 30,
            location: "Минск",
            mark: 9.1,
            price: 100
        },
        {
            id: 4,
            service_name: "Гродненский государственный музей истории религии",
            img_url: "https://ekskursii.by/images/obj3/102139/c18he5_3_true.jpg",
            discount: 20,
            location: "Гродно",
            mark: 8.5,
            price: 12
        },
        {
            id: 5,
            service_name: "Аренда Volkswagen Tiguan",
            img_url: "https://dh.img.tam.by/320x218s/offers/0e/0/8fc9e3e25a7b85b390b45ae9b29c57e0-2.jpg",
            discount: 30,
            location: "Минск",
            mark: 9.1,
            price: 100
        },
        {
            id: 6,
            service_name: "Гродненский государственный музей истории религии",
            img_url: "https://ekskursii.by/images/obj3/102139/c18he5_3_true.jpg",
            discount: 20,
            location: "Гродно",
            mark: 8.5,
            price: 12
        },
    ];
    const testDataComments = [
        {
            id: 1,
            service_name: "Аренда Volkswagen Tiguan (Слайд 1)",
            company_name: "Пилот-авто",
            location: "Минск",
            mark: 9,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
            user_ns: "Алексей Костюков",
            date: "04.11.2020"
        },
        {
            id: 2,
            service_name: "Аренда Volkswagen Tiguan (Слайд 2)",
            company_name: "Пилот-авто",
            location: "Минск",
            mark: 9,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
            user_ns: "Алексей Костюков",
            date: "04.11.2020"
        },
        {
            id: 3,
            service_name: "Аренда Volkswagen Tiguan (Слайд 3)",
            company_name: "Пилот-авто",
            location: "Минск",
            mark: 10,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
            user_ns: "Алексей Костюков",
            date: "04.11.2020"
        },
        {
            id: 4,
            service_name: "Аренда Volkswagen Tiguan (Слайд 4)",
            company_name: "Пилот-авто",
            location: "Минск",
            mark: 8,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
            user_ns: "Алексей Костюков",
            date: "04.11.2020"
        },
        {
            id: 5,
            service_name: "Аренда Volkswagen Tiguan (Слайд 5)",
            company_name: "Пилот-авто",
            location: "Минск",
            mark: 9,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                   architecto consequatur cupiditate deleniti dicta ducimus esse excepturi harum nam
                   necessitatibus odit, officia perferendis porro quaerat quis! Accusantium
                   doloribus facere natus.`,
            user_ns: "Алексей Костюков",
            date: "04.11.2020"
        },
    ];

    return (
      <section className="home">
          <AboutService/>
          <section className="popular-stocks">
              <div className="container">
                  <div className="popular-stocks__content">
                      <h2 className="popular-stocks__title">Популярные акции</h2>
                      <Stocks stocks={testDataStocks}/>
                      <div className="wrap-btn">
                          <button className="btn btn__load-more-stocks">Показать еще</button>
                      </div>
                  </div>
              </div>
          </section>
          <section className="service-icons">
              <div className="container">
                  <div className="service-icons__content">
                      <div className="wrap-icon">
                          <div className="icon">
                              <i className="fas fa-house-user"></i>
                          </div>
                      </div>
                      <div className="wrap-icon">
                          <div className="icon">
                              <i className="fas fa-car-alt"></i>
                          </div>
                      </div>
                      <div className="wrap-icon">
                          <div className="icon">
                              <i className="fas fa-route"></i>
                          </div>
                      </div>
                      <div className="wrap-icon">
                          <div className="icon">
                              <i className="fas fa-icons"></i>
                          </div>
                      </div>
                      <div className="wrap-icon">
                          <div className="icon">
                              <i className="fas fa-utensils"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <Comments comments={testDataComments}/>
      </section>
    );
}