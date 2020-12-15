import React, {useState} from 'react';
import "./ServiceAdding.scss";
import {SERVICES, VALIDATION_MES} from "../../../../constants/constants";
import {TransportService} from "./TransportService";
import * as Yup from "yup";
import {AttractionsService} from "./AttractionsService";
import {HousingService} from "./HousingService";

export const ServiceAdding = () => {
    let [currentType, setCurrentType] = useState("Выберите тип");
    console.log(currentType)

    let types = [];
    for (const key in SERVICES) {
        types.push(key);
    }

    let initialValues = {
        type: currentType,
        subType: "Выберите подтип",
        name: "",
        description: "",
        price: "",
        isBooked: false,
        isActive: false,
    };

    let subTypes = [initialValues.subType];
    for (const key in SERVICES) {
        if (key === currentType) {
            for (const subKey in SERVICES[key].subtypes) {
                subTypes.push(subKey);
            }
        }
    }

    let validationSchema = Yup.object().shape({
        name: Yup.string().required(VALIDATION_MES.REQUIRED),
        subType: Yup.string().oneOf(subTypes.slice(1), VALIDATION_MES.REQUIRED),
        price: Yup.number().min(0, VALIDATION_MES.SERVICE.PRICE.MIN_VALUE).required(VALIDATION_MES.REQUIRED),
    });

    return (
        <section className="service-adding">
            <h2 className="services-manipulation__action-title">Добавление услуги</h2>
            <div className="service-adding__content">
                <div className="type-field">
                    <select
                        className="select"
                        onChange={(e) => {
                            setCurrentType(e.target.options[e.target.selectedIndex].value);
                        }}
                    >
                        <option value="Выберите тип">Выберите тип</option>
                        {types.map(t => <option key={t} value={t}>{SERVICES[t].type}</option>)}
                    </select>
                </div>
                {currentType==="transport" && <TransportService
                    type={currentType} subTypes={subTypes}
                    initialValues={initialValues} validationSchema={validationSchema}/>}
                {currentType==="attractions" && <AttractionsService
                    type={currentType} subTypes={subTypes}
                    initialValues={initialValues} validationSchema={validationSchema}/>}
                {currentType==="housing" && <HousingService
                    type={currentType} subTypes={subTypes}
                    initialValues={initialValues} validationSchema={validationSchema}/>}
            </div>
        </section>
    );
};

