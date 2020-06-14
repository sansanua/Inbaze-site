import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import { getInstrument } from 'utils/instrumentsStructure';
import { toQuery } from 'utils/query';
import { FILTERS } from 'utils/filters';

import style from './InstrumentCard.module.scss';

const disableColor = '#e8e8e8';

export default function InstrumentCard({ name, shortDescription, className, slug, disabled, onOpenSubscribeModal }) {
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

    const handlePopup = () => {
        onOpenSubscribeModal();
    };

    return (
        <div
            className={cx(className, style.base, { [style.disabled]: disabled })}
            style={{ backgroundColor: !disabled ? color : disableColor }}
            onClick={disabled ? handlePopup : null}
        >
            {disabled ? (
                content
            ) : (
                <Link
                    to={
                        disabled
                            ? null
                            : {
                                  pathname: '/proposals',
                                  search: toQuery({ [FILTERS.instruments]: slug }),
                              }
                    }
                >
                    {content}
                </Link>
            )}
        </div>
    );
}
