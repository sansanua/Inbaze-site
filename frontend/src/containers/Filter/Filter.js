import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { INSTRUMENTS } from '../../api/queries/instruments';

import FilterComponent from './components/Filter';

export default function FilterContainer() {
    const { data: instrumentsData, instrumentsLoading } = useQuery(INSTRUMENTS);

    console.log(instrumentsData);

    return (
        <FilterComponent
            instrumentsLoading={instrumentsLoading}
            instruments={instrumentsData && instrumentsData.instruments}
        ></FilterComponent>
    );
}
