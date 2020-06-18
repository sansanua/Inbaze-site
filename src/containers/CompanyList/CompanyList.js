import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import cx from 'classnames';
import { isNil } from 'lodash';

import { GlobalDataContext } from 'contexts';
import { COMPANIES_FILTERED } from '../../api/queries/company';

import { useFilter } from '../../hooks/useFilter';
import { CURRENCY } from '../../utils/currencyIcons';

import CompanyItem from './components/CompanyItem';
import Loader from 'components/Loader';

import style from './CompanyList.module.scss';

const amountFilter = (company, minimumAmount, globalData) => {
    if (!minimumAmount || minimumAmount === 135000) {
        // move to const
        return true;
    }
    if (!company.investmentCurrency) {
        return false;
    }

    const availableMinAmount = [];
    if (company.investmentCurrency.slug === CURRENCY.USD) {
        availableMinAmount.push(company.minimumInvestmentAmount * globalData.dollarExchangeRate);
    } else {
        availableMinAmount.push(company.minimumInvestmentAmount);
    }

    if (company.secondInvestmentCurrency && company.secondInvestmentCurrency.slug === CURRENCY.USD) {
        availableMinAmount.push(company.secondMinimumInvestmentAmount * globalData.dollarExchangeRate);
    } else {
        availableMinAmount.push(company.secondMinimumInvestmentAmount);
    }

    return availableMinAmount.filter(Boolean).some((a) => a <= minimumAmount);
};

const currencyFilter = (company, investmentCurrency) => {
    if (!investmentCurrency || !investmentCurrency.length) {
        return true;
    }

    return (
        investmentCurrency.includes(company.investmentCurrency?.slug) ||
        investmentCurrency.includes(company.secondInvestmentCurrency?.slug)
    );
};

export default function CompanyList({ onFilterOpen }) {
    const globalData = useContext(GlobalDataContext);

    const { instruments, minimumInvestmentAmount, investmentCurrency, profitabilities, isFilterSelected } = useFilter();
    const { data, loading } = useQuery(COMPANIES_FILTERED, {
        variables: {
            instruments,
            profitabilities,
        },
    });

    const minimumAmount = minimumInvestmentAmount.length ? Number(minimumInvestmentAmount[0]) : undefined;

    const companies = (data && data.companies) || [];

    const filteredCompanies = companies
        .filter((company) => {
            return isNil(company.disabled) || company.disabled === false;
        })
        .filter((company) => amountFilter(company, minimumAmount, globalData))
        .filter((company) => currencyFilter(company, investmentCurrency));

    if (loading) {
        return <Loader />;
    }

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.titlePanel)}>
                <div className={cx(style.count)}>{filteredCompanies.length} инвестиционных компаний</div>
                <div className={cx(style.filterButton, { [style.selected]: isFilterSelected })} onClick={onFilterOpen}>
                    Фильтр
                </div>
            </div>

            {filteredCompanies.map((company) => (
                <CompanyItem {...company} key={company.id} />
            ))}
        </div>
    );
}
