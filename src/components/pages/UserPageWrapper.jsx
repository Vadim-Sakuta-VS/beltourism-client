import React from 'react';
import {Header} from '../Header/Header';
import {PageLoader} from '../PageLoader/PageLoader';
import {Footer} from '../Footer/Footer';

const UserPageWrapper = ({setPopupInfo, isShowingPageLoader, children}) => {
    return (
        <>
            <Header setPopupInfo={setPopupInfo}/>
            <div className="pages" >
                <PageLoader isShowingPageLoader={isShowingPageLoader}/>
                {children}
            </div>
            <Footer isShowingPageLoader={isShowingPageLoader}/>
        </>
    );
};

export default UserPageWrapper;