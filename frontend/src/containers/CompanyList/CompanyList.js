import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import cx from 'classnames';

import { COMPANIES_FILTERED } from '../../api/queries/company';

import { useFilter } from '../../hooks/useFilter';

import CompanyItem from './components/CompanyItem';
import style from './CompanyList.module.scss';

export default function CompanyList() {
    const { instruments, minimumInvestmentAmount, investmentCurrency } = useFilter();
    const { data } = useQuery(COMPANIES_FILTERED, {
        variables: {
            instruments,
            minimumInvestmentAmount: minimumInvestmentAmount.length ? Number(minimumInvestmentAmount[0]) : undefined,
            investmentCurrency,
        },
    });

    const companies = (data && data.companies) || [];

    return (
        <div className={cx(style.base)}>
            {companies.map((company) => (
                <CompanyItem {...company}></CompanyItem>
            ))}
        </div>
    );
}
