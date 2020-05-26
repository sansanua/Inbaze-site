import React from 'react';
import cx from 'classnames';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import Collapse from 'components/Collapse';
import Checkbox from 'components/Checkbox';

import style from './FilterBlock.module.scss';

export default function FilterBlock({ expanded, showTooltip, title, filters, selectedFilters, onClick }) {
    return (
        <div className={cx(style.filterBlok)}>
            <Collapse
                expanded={expanded}
                header={
                    <>
                        <div className={cx(style.filterBlokHeder)}>{title}</div>
                    </>
                }
                content={
                    <div className={cx(style.filterBlokContent)}>
                        {filters.map((filter) => {
                            return (
                                <>
                                    <div
                                        className={cx(style.filterBlokItem)}
                                        key={filter.slug}
                                        onClick={onClick(filter.slug)}
                                    >
                                        <Checkbox inline checked={selectedFilters.includes(filter.slug)} />
                                        <span data-tip data-for={filter.slug}>
                                            {filter.name}
                                        </span>
                                    </div>
                                    {showTooltip && (
                                        <ReactTooltip
                                            clickable
                                            className={style.tooltip}
                                            id={filter.slug}
                                            effect="solid"
                                            place="right"
                                            delayHide={50}
                                            backgroundColor={'#b2eaea'}
                                            textColor={'#666666'}
                                        >
                                            <p>{filter.shortDescription}</p>
                                            <Link className={cx(style.tooltipLink)} to={`instrument/${filter.slug}`}>
                                                Подробнее >
                                            </Link>
                                        </ReactTooltip>
                                    )}
                                </>
                            );
                        })}
                    </div>
                }
            />
        </div>
    );
}
