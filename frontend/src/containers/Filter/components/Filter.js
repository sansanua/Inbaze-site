import React from 'react';
import cx from 'classnames';

import style from './Filter.module.scss';

export default function FilterComponent({ instruments = [] }) {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.filterTitle)}>Фильтр</div>

            <div>
                {instruments.map((instrument) => {
                    return <div>{instrument.name}</div>;
                })}
            </div>
        </div>
    );
}
