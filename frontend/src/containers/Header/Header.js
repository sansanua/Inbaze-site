import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';

import style from './Header.module.scss';

export default function Header() {
    const [isTransparent, setIsTransparent] = useState(true);
    let location = useLocation();

    useEffect(() => {
        setIsTransparent(location.pathname === '/');
    }, [location]);

    return (
        <div className={cx(style.base, { [style.transparent]: isTransparent })}>
            <div className={cx(style.container)}>
                <div className={cx(style.logo)}></div>
                <div className={cx(style.items)}>
                    <div className={cx(style.item)}>Инструменты</div>
                    <div className={cx(style.item)}>Компании</div>
                    <div className={cx(style.item)}>Персональный советник</div>
                    <div className={cx(style.item)}>О нас</div>
                </div>
                <div className={cx(style.button)}>=</div>
            </div>
        </div>
    );
}
