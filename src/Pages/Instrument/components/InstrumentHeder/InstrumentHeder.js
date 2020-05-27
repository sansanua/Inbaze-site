import React from 'react';
import cx from 'classnames';

import { getColoredIcon } from 'utils/instrumentsStructure';

import style from './InstrumentHeder.module.scss';

export default function InstrumentHeder({ name, shortDescription, slug }) {
    return (
        <div className={cx(style.base)}>
            <div className={cx(style.nameContainer)}>
                <img className={cx(style.image)} src={getColoredIcon(slug)} alt={slug}></img>
                <div className={cx(style.name)}>{name}</div>
                <div className={cx(style.description)}>{shortDescription}</div>
            </div>
        </div>
    );
}
