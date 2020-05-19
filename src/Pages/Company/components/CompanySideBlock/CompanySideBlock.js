import React from 'react';
import cx from 'classnames';

import style from './CompanySideBlock.module.scss';
import Button from '../../../../components/Button/Button';


export default function CompanySideBlock({
                                             site,
                                             startYear,
                                             capital,
                                             numberOfClients,
                                             onlineInvestmentStatusTracking,
                                         }) {
    const url = new URL(site)

    return (
        <div className={style.base}>
            <div className={cx(style.rowContainer)}>
                <div className={cx(style.row)}>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Сайт</div>
                        <div className={cx(style.value)}>
                            <a href={site} target="_blank" rel="noopener noreferrer">
                                {url.hostname || 'Перейти'}
                            </a>
                        </div>
                    </div>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Год основания</div>
                        <div className={cx(style.value)}>{startYear}</div>
                    </div>
                </div>
                <div className={cx(style.row)}>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Капитал</div>
                        <div className={cx(style.value)}>{capital}</div>
                    </div>
                    <div className={cx(style.col)}>
                        <div className={cx(style.title)}>Количество-клиентов</div>
                        <div className={cx(style.value)}>{numberOfClients}</div>
                    </div>
                </div>
                <div className={cx(style.row)}>
                    <div className={cx(style.col, style.colFullWidth)}>
                        <div className={cx(style.title)}>Отслеживание статуса инвестиций онлайн</div>
                        <div className={cx(style.value)}>
                            {onlineInvestmentStatusTracking ? 'Да' : 'Нет'}
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx(style.button)}>
                <Button type="lightBlueBlue">Оставить заявку</Button>
            </div>
        </div>
    );
}
