import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { FILTERS } from 'utils/filters';
import { toQuery } from 'utils/query';

import Button from 'components/Button/Button';

import style from './InstrumentSideBlock.module.scss';

const icons = [1, 2, 3];

export default function InstrumentSideBlock({ risk, complexity, profitability, slug }) {
    const renderIcons = (className, value) => (
        <div className={cx(style.icons)}>
            {icons.map((i) => (
                <div key={i} className={cx(className, style.icon, { [style.selected]: i <= value })}></div>
            ))}
        </div>
    );

    return (
        <div className={style.base}>
            <div className={cx(style.infoContainer)}>
                <div className={cx(style.row)}>
                    <div className={cx(style.col)}>
                        <div>Доходность</div>
                        {renderIcons(style.iconProfitability, profitability)}
                    </div>
                </div>
                <div className={cx(style.row)}>
                    <div className={cx(style.col)}>
                        <div>Риск</div>
                        {renderIcons(style.iconRisk, risk)}
                    </div>

                    <div className={cx(style.col)}>
                        <div>Сложность</div>
                        {renderIcons(style.iconComplexity, complexity)}
                    </div>
                </div>
                <div className={cx(style.buttonRow)}>
                    <Link
                        to={{
                            pathname: '/companies',
                            search: toQuery({ [FILTERS.instruments]: slug }),
                        }}
                    >
                        <Button type="lightBlueBlue">Посмотреть каталог</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
