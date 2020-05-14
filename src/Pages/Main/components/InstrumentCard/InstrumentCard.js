import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { getInstrument } from 'utils/instrumentsStructure';

import style from './InstrumentCard.module.scss';

export default function InstrumentCard({ name, shortDescription, className, slug, disabled }) {
    const instrument = getInstrument(slug);
    if (!instrument) {
        console.log(slug);
        return null;
    }
    const { image, color } = instrument;

    const content = (
        <>
            <div className={cx(style.image)} style={{ backgroundImage: `url(${image})` }}></div>

            <div className={cx(style.content)}>
                <div className={cx(style.name)}>{name}</div>
                <div className={cx(style.description)}>{shortDescription}</div>
            </div>
        </>
    );
    return (
        <div className={cx(className, style.base, { [style.disabled]: disabled })} style={{ backgroundColor: color }}>
            {disabled ? content : <Link to={disabled ? null : `/instrument/${slug}`}>{content}</Link>}
        </div>
    );
}
