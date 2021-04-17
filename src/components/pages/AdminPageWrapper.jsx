import React, {useContext} from 'react';
import './AdminPageWrapper.scss';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../../App';
import {showAlert} from '../../redux/actionCreators';
import {useDispatch} from 'react-redux';

const AdminPageWrapper = ({children}) => {
    let contextAuth = useContext(AuthContext);
    let history = useHistory();
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(showAlert(`Выход с ${localStorage.getItem('admin-email')}`, 'good'));
        localStorage.removeItem('admin-email');
        localStorage.removeItem('admin-token');
        contextAuth.setIsAdminAuth(false);
        history.replace('/admin-login');
    }

    return (
        <div className='admin-pages'>
            <header className="admin-header">
                <div className="container admin-header__container">
                    <NavLink to="/home" className="header__logo-wrap"><span>bel</span>booking</NavLink>
                    {
                        contextAuth.isAdminAuth &&
                        <div className="admin-out">
                            <span className='admin-out__email'>{localStorage.getItem('admin-email')}</span>
                            <button className='btn admin-out__btn' onClick={onClickHandler}>Выйти</button>
                        </div>
                    }
                </div>
            </header>
            {children}
        </div>
    );
};

export default AdminPageWrapper;