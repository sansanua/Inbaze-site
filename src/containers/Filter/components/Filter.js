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
    bottomContent,
    onInstrumentClick,
    onMinimumInvestmentAmountChange,
    onCurrenciesClick,
    onProfitabilitiesClick,
    onStartSlide,
    onEndSlide,
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
                    expanded
                    title="Доходность"
                    filters={profitabilities}
                    selectedFilters={selectedProfitabilities}
                    onClick={handleProfitabilitiesClick}
                />

                <FilterBlock
                    expanded
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
                                : 135000
                        }
                        title="Минимальная сумма&nbsp;инвестирования"
                        onSelect={handleMinimumInvestmentAmount}
                        onStartSlide={onStartSlide}
                        onEndSlide={onEndSlide}
                    />
                </div>

                <div className={style.bottomContent}>{bottomContent}</div>
            </div>
        </div>
    );
}
