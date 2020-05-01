import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { COMPANIES_FILTERED_BY_SLUG } from '../../api/queries/company';

import { useFilter } from '../../hooks/useFilter';

export default function CompanyList() {
    const { instruments } = useFilter();
    const { data } = useQuery(COMPANIES_FILTERED_BY_SLUG, {
        variables: { slugs: instruments },
    });

    const companies = (data && data.companies) || [];

    return (
        <div>
            {companies.map((company) => (
                <div>{company.name}</div>
            ))}
        </div>
    );
}
