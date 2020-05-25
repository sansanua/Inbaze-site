import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import cx from 'classnames';

import { COMPANIES_FILTERED } from '../../api/queries/company';

import { useFilter } from '../../hooks/useFilter';

import { GlobalDataContext } from 'contexts';

import CompanyItem from './components/CompanyItem';
import style from './CompanyList.module.scss';
import { CURRENCY } from '../../utils/currencyIcons';

export default function CompanyList({ onFilterOpen }) {
    const globalData = useContext(GlobalDataContext);

    const { instruments, minimumInvestmentAmount, investmentCurrency, profitabilities, isFilterSelected } = useFilter();
    const { data } = useQuery(COMPANIES_FILTERED, {
        variables: {
            instruments,
            investmentCurrency,
            profitabilities,
        },
    });

    const minimumAmount = minimumInvestmentAmount.length ? Number(minimumInvestmentAmount[0]) : undefined;

    const companies = (data && data.companies) || [];
    const filteredCompanies = minimumAmount
        ? companies.filter((c) => {
              if (!c.investmentCurrency) {
                  return false;
              }

              if (c.investmentCurrency.slug === CURRENCY.USD) {
                  return c.minimumInvestmentAmount <= minimumAmount / globalData.dollarExchangeRate;
              }

              return c.minimumInvestmentAmount <= minimumAmount;
          })
        : companies;

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.titlePanel)}>
                <div className={cx(style.count)}>{filteredCompanies.length} инвестиционных компаний</div>
                <div className={cx(style.filterButton, { [style.selected]: isFilterSelected })} onClick={onFilterOpen}>
                    Фильтр
                </div>
                <div className={cx(style.sortButton)}>Сортировать</div>
            </div>

            {filteredCompanies.map((company) => (
                <CompanyItem {...company} key={company.id} />
            ))}
        </div>
    );
}
