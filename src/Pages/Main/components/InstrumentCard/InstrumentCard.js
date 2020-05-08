import React from 'react';
import cx from 'classnames';

import style from './InstrumentCard.module.scss';

export default function InstrumentCard({ name, description, color, image, className, link }) {
    const handleClick = () => {};
    return (
        <div className={cx(className, style.base)} style={{ backgroundColor: color }} onClick={handleClick}>
            <div className={cx(style.image)} style={{ backgroundImage: `url(${image})` }}></div>

            <div className={cx(style.content)}>
                <div className={cx(style.name)}>{name}</div>
                <div className={cx(style.description)}>{description}</div>
            </div>
        </div>
    );
}
