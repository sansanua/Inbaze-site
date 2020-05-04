import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import cx from 'classnames';

import { COMPANIES_FILTERED } from '../../api/queries/company';

import { useFilter } from '../../hooks/useFilter';

import CompanyItem from './components/CompanyItem';
import style from './CompanyList.module.scss';

export default function CompanyList({ onFilterOpen }) {
    const { instruments, minimumInvestmentAmount, investmentCurrency, profitabilities, isFilterSelected } = useFilter();
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
            <div className={cx(style.titlePanel)}>
                <div className={cx(style.count)}>{companies.length} инвестиционных компаний</div>
                <div className={cx(style.filterButton, { [style.selected]: isFilterSelected })} onClick={onFilterOpen}>
                    Фильтр
                </div>
                <div className={cx(style.sortButton)}>Сортировать</div>
            </div>

            {companies.map((company) => (
                <CompanyItem {...company}></CompanyItem>
            ))}
        </div>
    );
}
