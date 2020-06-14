import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import CompanyHeder from './CompanyHeder';
import CompanyMainBlock from './CompanyMainBlock';

import style from './Company.module.scss';
import CompanySideBlock from './CompanySideBlock/CompanySideBlock';

export default function CompanyComponent(props) {
    //#region props
    const {
        aboutCompany,
        capital,
        companyCommission,
        complexity,
        currencyIncome,
        description,
        descriptionOfCooperation,
        documentsActivities,
        documentsFromInvestor,
        documentsSecuringRights,
        historicalProfitability,
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
        image,
        secondHistoricalProfitability,
        secondInvestmentCurrency,
        secondMinimumInvestmentAmount,
    } = props;
    //#endregion

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                <div className={cx(style.navigation)}>
                    <Link to={'/'}>Главная</Link>
                    <span className={style.arrow}>></span>
                    <Link to={'/proposals'}>Предложения</Link>
                    <span className={style.arrow}>></span>
                    <span>{name}</span>
                </div>

                <CompanyHeder
                    complexity={complexity}
                    description={description}
                    historicalProfitability={historicalProfitability}
                    image={image}
                    instruments={instruments}
                    investmentCurrency={investmentCurrency}
                    liquidity={liquidity}
                    minimumInvestmentAmount={minimumInvestmentAmount}
                    name={name}
                    risk={risk}
                    typeOfIncome={typeOfIncome}
                    secondHistoricalProfitability={secondHistoricalProfitability}
                    secondInvestmentCurrency={secondInvestmentCurrency}
                    secondMinimumInvestmentAmount={secondMinimumInvestmentAmount}
                />

                <div className={cx(style.content)}>
                    <div className={cx(style.mainBlock)}>
                        <CompanyMainBlock
                            aboutCompany={aboutCompany}
                            companyCommission={companyCommission}
                            currencyIncome={currencyIncome}
                            descriptionOfCooperation={descriptionOfCooperation}
                            documentsActivities={documentsActivities}
                            documentsFromInvestor={documentsFromInvestor}
                            documentsSecuringRights={documentsSecuringRights}
                            historicalProfitability={historicalProfitability}
                            incomePaymentProcess={incomePaymentProcess}
                            investmentCurrency={investmentCurrency}
                            liquidityOfInvestment={liquidityOfInvestment}
                            minimumInvestmentPeriod={minimumInvestmentPeriod}
                            optimalInvestmentPeriod={optimalInvestmentPeriod}
                            otherServiceCharges={otherServiceCharges}
                            payingTaxesIncome={payingTaxesIncome}
                            placeOfStorageFunds={placeOfStorageFunds}
                            processOfGeneratingIncome={processOfGeneratingIncome}
                            processOfManagingMoney={processOfManagingMoney}
                            risksOfLossInvested={risksOfLossInvested}
                            secondHistoricalProfitability={secondHistoricalProfitability}
                            secondInvestmentCurrency={secondInvestmentCurrency}
                            typeOfIncome={typeOfIncome}
                        />
                    </div>
                    <div className={cx(style.sideBlock)}>
                        <CompanySideBlock
                            capital={capital}
                            investmentCurrency={investmentCurrency}
                            name={name}
                            numberOfClients={numberOfClients}
                            site={site}
                            startYear={startYear}
                            onlineInvestmentStatusTracking={onlineInvestmentStatusTracking}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
