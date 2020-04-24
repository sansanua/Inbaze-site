import React from 'react';
import cx from 'classnames';

import style from './Header.module.scss';

export default function Header() {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.logo)}>logo</div>
            <div className={cx(style.items)}>
                <div className={cx(style.item)}>Инструменты</div>
                <div className={cx(style.item)}>Компании</div>
                <div className={cx(style.item)}>Персональный советник</div>
                <div className={cx(style.item)}>О нас</div>
            </div>
            <div className={cx(style.button)}>items</div>
        </div>
    );
}
