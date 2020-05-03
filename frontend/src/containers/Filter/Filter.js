import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { INSTRUMENTS } from '../../api/queries/instruments';
import { CURRENCIES } from 'api/queries/currencies';
import { PROFITABILITIES } from 'api/queries/profitabilities';

import { useFilter } from '../../hooks/useFilter';
import { FILTERS } from 'utils/filters';

import FilterComponent from './components/Filter';

export default function FilterContainer() {
    const { data: instrumentsData, instrumentsLoading } = useQuery(INSTRUMENTS);
    const { data: currenciesData, currenciesLoading } = useQuery(CURRENCIES);
    const { data: profitabilitiesData, profitabilitiesLoading } = useQuery(PROFITABILITIES);

    const { filters, toggleFilter } = useFilter();

    const handleFilterClick = (filterName, isSingleValue) => (selectedFilter) => {
        toggleFilter(filterName, selectedFilter, isSingleValue);
    };

    return (
        <FilterComponent
            instruments={instrumentsData && instrumentsData.instruments}
            selectedInstruments={filters[FILTERS.instruments]}
            currencies={currenciesData && currenciesData.currencies}
            selectedCurrencies={filters[FILTERS.investmentCurrency]}
            profitabilities={profitabilitiesData && profitabilitiesData.profitabilities}
            selectedProfitabilities={filters[FILTERS.profitabilities]}
            selectedMinimumInvestmentAmount={filters[FILTERS.minimumInvestmentAmount]}
            onInstrumentClick={handleFilterClick(FILTERS.instruments)}
            onCurrenciesClick={handleFilterClick(FILTERS.investmentCurrency)}
            onProfitabilitiesClick={handleFilterClick(FILTERS.profitabilities)}
            onMinimumInvestmentAmountChange={handleFilterClick(FILTERS.minimumInvestmentAmount, true)}
        ></FilterComponent>
    );
}
