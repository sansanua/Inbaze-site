import React from 'react';

import style from './AdditionalBlok.module.scss';

export default function AdditionalBlok() {
    return (
        <div className={style.base}>
            <div className={style.container}>
                <div className={style.textBlock}>
                    <div className={style.title}>По каждому предложению подготовлен полноценный анализ</div>
                    <div className={style.text}>
                        Вы сможете найти информацию о том как предложение приносит доход, какие риски могут быть у
                        инвестора и как сделки оформляются юридически.
                    </div>
                </div>

                <div className={style.imageBlock}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    );
}
