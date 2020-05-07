import React from 'react';
import cx from 'classnames';

import Button from 'components/Button';

import CompanyHeder from './CompanyHeder';
import CompanyMainBlock from './CompanyMainBlock';

import style from './Company.module.scss';

export default function CompanyComponent(props) {
    const {
        aboutCompany,
        capital,
        companyCommission,
        complexity,
        created_at,
        currencyIncome,
        description,
        descriptionOfCooperation,
        documentsActivities,
        documentsFromInvestor,
        documentsSecuringRights,
        historicalProfitability,
        id,
        incomePaymentProcess,
        instruments,
        investmentCurrency,
        liquidity,
        liquidityOfInvestment,
        minimumInvestmentAmount,
        minimumInvestmentPeriod,
        name,
        numberOfClients,
        onlineInvestmentStatusTracking,
        optimalInvestmentPeriod,
        otherServiceCharges,
        payingTaxesIncome,
        placeOfStorageFunds,
        processOfGeneratingIncome,
        processOfManagingMoney,
        risk,
        risksOfLossInvested,
        site,
        startYear,
        typeOfIncome,
        updated_at,
    } = props;

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <CompanyHeder
                    name={name}
                    description={description}
                    instruments={instruments}
                    risk={risk}
                    complexity={complexity}
                    minimumInvestmentAmount={minimumInvestmentAmount}
                    historicalProfitability={historicalProfitability}
                    investmentCurrency={investmentCurrency}
                    liquidity={liquidity}
                    typeOfIncome={typeOfIncome}
                ></CompanyHeder>

                <div className={cx(style.content)}>
                    <div className={cx(style.mainBlock)}>
                        <CompanyMainBlock {...props}></CompanyMainBlock>
                    </div>
                    <div className={cx(style.sideBlock)}>
                        <div className={cx(style.rowContainer)}>
                            <div className={cx(style.row)}>
                                <div className={cx(style.col)}>
                                    <div className={cx(style.title)}>Сайт</div>
                                    <div className={cx(style.value)}>{site}</div>
                                </div>
                                <div className={cx(style.col)}>
                                    <div className={cx(style.title)}>Год основания</div>
                                    <div className={cx(style.value)}>{startYear}</div>
                                </div>
                            </div>
                            <div className={cx(style.row)}>
                                <div className={cx(style.col)}>
                                    <div className={cx(style.title)}>Капитал</div>
                                    <div className={cx(style.value)}>{capital}</div>
                                </div>
                                <div className={cx(style.col)}>
                                    <div className={cx(style.title)}>Количество-клиентов</div>
                                    <div className={cx(style.value)}>{numberOfClients}</div>
                                </div>
                            </div>
                            <div className={cx(style.row)}>
                                <div className={cx(style.col)}>
                                    <div className={cx(style.title)}>Отслеживание статуса инвестиций онлайн</div>
                                    <div className={cx(style.value)}>
                                        {onlineInvestmentStatusTracking ? 'Да' : 'Нет'}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx(style.button)}>
                            <Button type="lightBlueBlue">Оставить заявку</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
