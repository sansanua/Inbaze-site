import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { COMPANIES_FILTERED_BY_SLUG } from '../../api/queries/company';

import { useFilter } from '../../hooks/useFilter';

export default function CompanyList() {
    const { instruments, minimumInvestmentAmount } = useFilter();
    const { data } = useQuery(COMPANIES_FILTERED_BY_SLUG, {
        variables: {
            instruments,
            minimumInvestmentAmount: minimumInvestmentAmount.length ? Number(minimumInvestmentAmount[0]) : undefined,
        },
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
