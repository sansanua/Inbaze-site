import React from 'react';
import cx from 'classnames';

import SliderFilter from './SliderFilter';
import FilterBlock from './FilterBlock';

import style from './Filter.module.scss';

export default function FilterComponent({
    instruments = [],
    selectedInstruments = [],
    onInstrumentClick,
    onMinimumInvestmentAmountChange,
}) {
    const handleInstrumentClick = (selectedFilter) => () => {
        onInstrumentClick(selectedFilter);
    };

    const handleMinimumInvestmentAmount = (value) => {
        onMinimumInvestmentAmountChange(value);
    };

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.filterTitle)}>Фильтр</div>

            <div className={cx(style.filterBlokes)}>
                <FilterBlock
                    expanded
                    title="Инструменты"
                    filters={instruments}
                    selectedFilters={selectedInstruments}
                    onClick={handleInstrumentClick}
                />

                <div className={cx(style.filterBlok)}>
                    <SliderFilter
                        expanded
                        title="Минимальная суммаинвестирования"
                        onSelect={handleMinimumInvestmentAmount}
                    ></SliderFilter>
                </div>
            </div>
        </div>
    );
}
