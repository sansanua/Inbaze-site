import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useLocation } from 'react-router-dom';

import style from './Header.module.scss';

export default function Header() {
    const [isTransparent, setIsTransparent] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let location = useLocation();

    useEffect(() => {
        setIsTransparent(location.pathname === '/');
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cx(style.base, { [style.transparent]: isTransparent })}>
            <div className={cx(style.container)}>
                <div className={cx(style.logo)}></div>
                <div className={cx(style.items, { [style.menuOpen]: isMenuOpen })}>
                    <div className={cx(style.item)}>Инструменты</div>
                    <div className={cx(style.item)}>Компании</div>
                    <div className={cx(style.item)}>Персональный советник</div>
                    <div className={cx(style.item)}>О нас</div>
                </div>
                <div className={cx(style.menu)} onClick={toggleMenu}>
                    <div className={cx(style.button)}></div>
                </div>
            </div>
        </div>
    );
}
