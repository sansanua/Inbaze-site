import { useHistory, useLocation } from 'react-router-dom';

import { toggleArrayItem } from '../utils/common';
import { toQuery, fromQuery, queryToArray } from '../utils/query';

export function useFilter() {
    const { push } = useHistory();
    const { pathname, search } = useLocation();

    const filters = fromQuery(search);

    for (const key in filters) {
        if (filters && filters[key]) {
            filters[key] = queryToArray(filters[key]);
        }
    }

    const toggleFilter = (filterName, selectedFilter, isSingleValue = false) => {
        const prevFilters = filters[filterName];
        let newFilters;

        if (isSingleValue) {
            newFilters = selectedFilter;
        } else {
            newFilters = toggleArrayItem(queryToArray(prevFilters), selectedFilter);
        }

        push({
            pathname,
            search: toQuery({ ...filters, [filterName]: newFilters }),
        });
    };

    return {
        filters,
        toggleFilter,
        instruments: filters['instruments'] || [],
        minimumInvestmentAmount: filters['minimumInvestmentAmount'] || [],
    };
}
