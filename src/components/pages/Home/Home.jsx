import React from "react";
import "./Home.scss";
import {Stocks} from "../../Stocks/Stocks";

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

    return (
      <section className="home">
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
      </section>
    );
}