import React from 'react';
import {SelectField} from "../../../Forms/Fields/SelectField";
import {SERVICES} from "../../../../constants/constants";
import {TextField} from "../../../Forms/Fields/TextField";
import {TextareaField} from "../../../Forms/Fields/TextareaField";
import {CheckboxRadioField} from "../../../Forms/Fields/CheckboxRadioField";

export const GeneralFields = ({type, subTypes}) => {
    return (
        <>
            <SelectField
                name="subType"
                options={
                    [
                        {value: subTypes[0], text: subTypes[0]},
                        ...subTypes.slice(1).map(s => ({
                            value: s,
                            text: SERVICES[type].subtypes[s]
                        }))
                    ]
                }
                style={{fontSize: "1rem"}}
            />
            <TextField
                name="name"
                type="text"
                placeholder="Навзание услуги"
                style={{fontSize: "1rem", marginTop: "2%"}}
            />
            <TextareaField
                name="description"
                rows={5}
                placeholder="Описание..."
                style={{fontSize: "1rem"}}
                maxLength={200}
            />
            <TextField
                name="price"
                type="number"
                placeholder="Стоимость услуги"
                min={0}
                style={{fontSize: "1rem", marginTop: "1%"}}
            />
            <CheckboxRadioField
                name="isBooked"
                type="checkbox"
                label="Статус бронирования"
                style={{fontSize: "1rem", marginTop: "4%"}}
            />
            <CheckboxRadioField
                name="isActive"
                type="checkbox"
                label="Статус активности"
                style={{fontSize: "1rem", marginTop: "2%"}}
            />
        </>
    );
}
