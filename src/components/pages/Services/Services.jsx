import React, {useEffect} from 'react';
import "./Services.scss"
import {useLocation, Redirect} from "react-router-dom"
import {POPUPS_FORMS, SERVICES} from "../../../constants/constants";
import ServiceItem from "./ServiceItem/ServiceItem";
import {ServicesMap} from "./ServicesMap/ServicesMap";
import PaginationButton from "../../PaginationButton/PaginationButton";
import {
    initServicesPage,
    paginateServices,
    resetPageNumberServices,
} from "../../../redux/actionCreators";
import {useDispatch, useSelector} from "react-redux";
import {PageWrapper} from "../PageWrapper";

export const Services = ({setPopupInfo, isShowingPageLoader}) => {
    let search = useLocation().search;
    let dispatch = useDispatch();
    let services = useSelector(state => state.services.services);
    const isShowingPaginationLoader = useSelector(state =>
        state.services.isShowingPaginationServicesLoader);
    let query = new URLSearchParams(search);
    const searchStorage = localStorage.getItem("services-search");

    let type = query.get("type");
    let subtype = query.get("subType");

    useEffect(() => {
        localStorage.setItem("services-search", search);
        if (type && subtype && searchStorage && search !== searchStorage) {
            dispatch(resetPageNumberServices());
            dispatch(initServicesPage(search));
        } else if (type && subtype) {
            dispatch(initServicesPage(search));
        }
    }, [search]);

    if (!type || !subtype) {
        return <Redirect to="/page404"/>;
    }

    console.log('services component', services);

    let serviceItemsElements = services.map(s => (
        s.service.isActive && s.service.isBooked && <ServiceItem key={s.service.id} service={s}/>
    ));

    return (
        <PageWrapper isShowingPageLoader={isShowingPageLoader}>
            <div className="services">
                <header className="services__header">
                    <h2 className="services__header-title">
                        Услуги/{SERVICES[type].type}/{SERVICES[type].subtypes[subtype]}
                    </h2>
                    <button
                        className="btn btn-filters"
                        onClick={() => setPopupInfo({activeForm: POPUPS_FORMS.FILTERS, fromFormClosed: ""})}
                    >
                        <i className="fas fa-align-justify"/>
                        <span>Фильтры</span>
                    </button>
                </header>
                <div className="services__main-content">
                    <div className="main-content__row-1">
                        {
                            services.length
                                ? <>
                                    <div className="services__items">
                                        {serviceItemsElements}
                                    </div>
                                    <PaginationButton
                                        classStyle="btn__load-more-b"
                                        isShowingPaginationLoader={isShowingPaginationLoader}
                                        callback={() => dispatch(paginateServices(search))}
                                    />
                                </>
                                : <div className="result-null">Нет услуг по данной категории</div>
                        }
                    </div>
                    <ServicesMap services={services}/>
                </div>
            </div>
        </PageWrapper>
    );
};
