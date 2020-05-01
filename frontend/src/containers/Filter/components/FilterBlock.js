import React from 'react';
import cx from 'classnames';

import Collapse from 'components/Collapse';
import Checkbox from 'components/Checkbox';

import style from './FilterBlock.module.scss';

export default function FilterBlock({ expanded, title, filters, selectedFilters, onClick }) {
    return (
        <div className={cx(style.filterBlok)}>
            <Collapse
                expanded={expanded}
                header={<div className={cx(style.filterBlokHeder)}>{title}</div>}
                content={
                    <div className={cx(style.filterBlokContent)}>
                        {filters.map((filter) => {
                            return (
                                <div className={cx(style.filterBlokItem)} onClick={onClick(filter.slug)}>
                                    <Checkbox inline checked={selectedFilters.includes(filter.slug)}></Checkbox>
                                    {filter.name}
                                </div>
                            );
                        })}
                    </div>
                }
            ></Collapse>
        </div>
    );
}
