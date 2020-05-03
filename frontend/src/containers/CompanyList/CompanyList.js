import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import cx from 'classnames';

import { COMPANIES_FILTERED } from '../../api/queries/company';

import { useFilter } from '../../hooks/useFilter';

import CompanyItem from './components/CompanyItem';
import style from './CompanyList.module.scss';

export default function CompanyList() {
    const { instruments, minimumInvestmentAmount, investmentCurrency, profitabilities } = useFilter();
    const { data } = useQuery(COMPANIES_FILTERED, {
        variables: {
            instruments,
            investmentCurrency,
            profitabilities,
            minimumInvestmentAmount: minimumInvestmentAmount.length ? Number(minimumInvestmentAmount[0]) : undefined,
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
