import React, {useState} from 'react';
import "./Locations.scss"
import {Location} from "./Location/Location";
import {useTransition, animated} from "react-spring";

export const Locations = ({contactDetailsName, locations}) => {
    let [isShowAllLocations, setIsShowAllLocations] = useState(false);
    const transitions = useTransition(isShowAllLocations, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},
    })

    return (
        <div className="locations">
            {
                contactDetailsName
                    ? <span className="contact-details-name">{contactDetailsName},</span>
                    : null
            }
            <span className="locations-title">Месторасположения:</span>
            <i
                className="fas fa-angle-down show-all-locations"
                title="Все локации"
                onClick={() => setIsShowAllLocations(!isShowAllLocations)}
            />
            {
                transitions.map(({item, key, props}) => {
                    return (
                        item
                            ? <animated.div key={key} className="locations-items" style={props}>
                                {
                                    locations.map((l) =>
                                        (
                                            <Location
                                                city={l.name}
                                                address={l.address}
                                                classStyle="style-popup-location"
                                            />
                                        ))
                                }
                            </animated.div>
                            : null
                    )
                })
            }
        </div>
    );
};

