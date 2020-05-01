import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { INSTRUMENTS } from '../../api/queries/instruments';

import { useFilter } from '../../hooks/useFilter';

import FilterComponent from './components/Filter';

export default function FilterContainer() {
    const { data: instrumentsData, instrumentsLoading } = useQuery(INSTRUMENTS);

    const { filters, toggleFilter } = useFilter();

    const handleFilterClick = (filterName, isSingleValue) => (selectedFilter) => {
        toggleFilter(filterName, selectedFilter, isSingleValue);
    };

    return (
        <FilterComponent
            instrumentsLoading={instrumentsLoading}
            instruments={instrumentsData && instrumentsData.instruments}
            selectedInstruments={filters['instruments']}
            onInstrumentClick={handleFilterClick('instruments')}
            onMinimumInvestmentAmountChange={handleFilterClick('minimumInvestmentAmount', true)}
        ></FilterComponent>
    );
}
