import React from 'react';
import cx from 'classnames';

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
    } = props;
    //#endregion

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
                    image={image}
                />

                <div className={cx(style.content)}>
                    <div className={cx(style.mainBlock)}>
                        <CompanyMainBlock
                            aboutCompany={aboutCompany}
                            processOfManagingMoney={processOfManagingMoney}
                            processOfGeneratingIncome={processOfGeneratingIncome}
                            investmentCurrency={investmentCurrency}
                            currencyIncome={currencyIncome}
                            descriptionOfCooperation={descriptionOfCooperation}
                            historicalProfitability={historicalProfitability}
                            typeOfIncome={typeOfIncome}
                            minimumInvestmentPeriod={minimumInvestmentPeriod}
                            optimalInvestmentPeriod={optimalInvestmentPeriod}
                            incomePaymentProcess={incomePaymentProcess}
                            risksOfLossInvested={risksOfLossInvested}
                            placeOfStorageFunds={placeOfStorageFunds}
                            liquidityOfInvestment={liquidityOfInvestment}
                            companyCommission={companyCommission}
                            otherServiceCharges={otherServiceCharges}
                            payingTaxesIncome={payingTaxesIncome}
                            documentsSecuringRights={documentsSecuringRights}
                            documentsActivities={documentsActivities}
                            documentsFromInvestor={documentsFromInvestor}
                        />
                    </div>
                    <div className={cx(style.sideBlock)}>
                        <CompanySideBlock
                            site={site}
                            startYear={startYear}
                            capital={capital}
                            investmentCurrency={investmentCurrency}
                            numberOfClients={numberOfClients}
                            onlineInvestmentStatusTracking={onlineInvestmentStatusTracking}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
