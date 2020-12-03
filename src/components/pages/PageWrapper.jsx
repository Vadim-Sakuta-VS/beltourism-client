import React from 'react';

export const PageWrapper = ({isShowingPageLoader, children}) => {
    return (
        !isShowingPageLoader
            ? <div className="page-wrapper">
                {children}
            </div>
            : null
    );
};