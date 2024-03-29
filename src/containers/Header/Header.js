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
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cx(style.base, { [style.transparent]: isTransparent })}>
            <div className={cx(style.container)}>
                <a href="/">
                    <div className={cx(style.logo)}></div>
                </a>
                <div className={cx(style.items, { [style.menuOpen]: isMenuOpen })}>
                    <NavLink to="/proposals" className={cx(style.item)} activeClassName={cx(style.selected)}>
                        Инвестиционные предложения
                    </NavLink>
                    <NavLink to="/about" className={cx(style.item)} activeClassName={cx(style.selected)}>
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
