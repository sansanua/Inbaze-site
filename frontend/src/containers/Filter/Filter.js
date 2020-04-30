import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory, useLocation } from 'react-router-dom';

import { INSTRUMENTS } from '../../api/queries/instruments';

import { toggleArrayItem } from '../../utils/common';
import { toQuery, fromQuery, queryToArray } from '../../utils/query';

import FilterComponent from './components/Filter';

export default function FilterContainer() {
    const { data: instrumentsData, instrumentsLoading } = useQuery(INSTRUMENTS);

    const { push } = useHistory();

    const { pathname, search } = useLocation();

    const filters = fromQuery(search);

    const handleFilterClick = (filterName) => (selectedFilter) => {
        const prevFilters = filters[filterName];
        const newFilters = toggleArrayItem(queryToArray(prevFilters), selectedFilter);

        push({
            pathname,
            search: toQuery({ [filterName]: newFilters }),
        });
    };

    return (
        <FilterComponent
            instrumentsLoading={instrumentsLoading}
            instruments={instrumentsData && instrumentsData.instruments}
            selectedInstruments={queryToArray(filters['instruments'])}
            onInstrumentClick={handleFilterClick('instruments')}
        ></FilterComponent>
    );
}
