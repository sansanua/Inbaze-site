import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import style from './InstrumentCard.module.scss';

export default function InstrumentCard({ name, description, color, image, className, slug, disabled }) {
    const content = (
        <>
            <div className={cx(style.image)} style={{ backgroundImage: `url(${image})` }}></div>

            <div className={cx(style.content)}>
                <div className={cx(style.name)}>{name}</div>
                <div className={cx(style.description)}>{description}</div>
            </div>
        </>
    );
    return (
        <div className={cx(className, style.base, { [style.disabled]: disabled })} style={{ backgroundColor: color }}>
            {disabled ? content : <Link to={disabled ? null : `/instrument/${slug}`}>{content}</Link>}
        </div>
    );
}
