import React from 'react';

import style from './SuccessScreen.module.scss';

export default function SuccessScreen({ title, subtitle }) {
    return (
        <div className={style.base}>
            <div className={style.textContainer}>
                <div className={style.title}>{title}</div>
                {subtitle && <div className={style.subtitle}>{subtitle}</div>}
            </div>

            <div className={style.logoContainer}>
                <div className={style.logo}></div>
            </div>
        </div>
    );
}
