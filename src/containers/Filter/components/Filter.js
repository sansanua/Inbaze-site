import React from 'react';
import cx from 'classnames';

import SliderFilter from './SliderFilter';
import FilterBlock from './FilterBlock';

import style from './Filter.module.scss';

export default function FilterComponent({
                                            instruments = [],
                                            selectedInstruments = [],
                                            currencies = [],
                                            selectedCurrencies = [],
                                            profitabilities = [],
                                            selectedProfitabilities = [],
                                            selectedMinimumInvestmentAmount,
                                            onInstrumentClick,
                                            onMinimumInvestmentAmountChange,
                                            onCurrenciesClick,
                                            onProfitabilitiesClick,
                                        }) {
    const handleInstrumentClick = (selectedFilter) => () => {
        onInstrumentClick(selectedFilter);
    };
    const handleCurrenciesClick = (selectedFilter) => () => {
        onCurrenciesClick(selectedFilter);
    };
    const handleProfitabilitiesClick = (selectedFilter) => () => {
        onProfitabilitiesClick(selectedFilter);
    };

    const handleMinimumInvestmentAmount = (value) => {
        onMinimumInvestmentAmountChange(value);
    };

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.filterTitle)}>Фильтр</div>

            <div className={cx(style.filterBlokes)}>
                <FilterBlock
                    showTooltip
                    expanded
                    title="Инструменты"
                    filters={instruments}
                    selectedFilters={selectedInstruments}
                    onClick={handleInstrumentClick}
                />

                <FilterBlock
                    title="Доходность"
                    filters={profitabilities}
                    selectedFilters={selectedProfitabilities}
                    onClick={handleProfitabilitiesClick}
                />

                <FilterBlock
                    title="Валюта инвестирования"
                    filters={currencies}
                    selectedFilters={selectedCurrencies}
                    onClick={handleCurrenciesClick}
                />

                <div className={cx(style.filterBlok)}>
                    <SliderFilter
                        expanded
                        selectedFilter={
                            selectedMinimumInvestmentAmount && selectedMinimumInvestmentAmount.length
                                ? selectedMinimumInvestmentAmount[0]
                                : 100000
                        }
                        title="Минимальная суммаинвестирования"
                        onSelect={handleMinimumInvestmentAmount}
                    />
                </div>
            </div>
        </div>
    );
}
