import React from 'react';

import style from './Loader.module.scss';

export default function Loader() {
    return (
        <div className={style.base}>
            <div className={style.spinner}>
                <div className={style.bounce1}></div>
                <div className={style.bounce2}></div>
            </div>
        </div>
    );
}
