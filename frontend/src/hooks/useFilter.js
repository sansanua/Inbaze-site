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

    const toggleFilter = (filterName, selectedFilter) => {
        const prevFilters = filters[filterName];
        const newFilters = toggleArrayItem(queryToArray(prevFilters), selectedFilter);

        push({
            pathname,
            search: toQuery({ [filterName]: newFilters }),
        });
    };

    return {
        filters,
        toggleFilter,
        instruments: filters['instruments'] || [],
    };
}
