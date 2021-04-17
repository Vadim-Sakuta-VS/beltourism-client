import React from 'react';
import './PasswordRequirements.scss';

export const PasswordRequirements = () => {
    return (
        <div
            className="password-requirements">
            <h6 className="password-requirements__title">
                Требования к паролю
            </h6>
            <p className="requirement">Не менее 8 символов</p>
            <p className="requirement">Не более 32 символов</p>
            <p className="requirement">Буква в нижнем регистре должна появляться как минимум 1 раз</p>
            <p className="requirement">Буква в верхнем регистре должна появляться как минимум 1 раз</p>
            <p className="requirement">Специальный символ (@#$%^&+=_) должен появляться как минимум 1 раз</p>
            <p className="requirement">Пробелы не разрешены</p>
        </div>
    );
}