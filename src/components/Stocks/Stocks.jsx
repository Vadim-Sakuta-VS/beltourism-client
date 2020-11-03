import React from "react";
import "./Stock.scss";
import {StockItem} from "./StockItem/StockItem";

export const Stocks = ({stocks}) => {
    let stockItemElements = stocks.map(s => <StockItem key={s.id} {...s}/>)

    return (
        <div className="stocks">
            {stockItemElements}
        </div>
    )
}