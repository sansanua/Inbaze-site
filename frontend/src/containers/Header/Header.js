import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useLocation, NavLink } from 'react-router-dom';

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
                    <NavLink to="/companies" className={cx(style.item)} activeClassName={cx(style.selected)}>
                        Инструменты
                    </NavLink>
                    <NavLink to="/" className={cx(style.item)}>
                        Компании
                    </NavLink>
                    <NavLink to="/" className={cx(style.item)}>
                        Персональный советник
                    </NavLink>
                    <NavLink to="/" className={cx(style.item)}>
                        О нас
                    </NavLink>
                </div>
                <div className={cx(style.menu)} onClick={toggleMenu}>
                    <div className={cx(style.button)}></div>
                </div>
            </div>
        </div>
    );
}
