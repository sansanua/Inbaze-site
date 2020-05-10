import React from 'react';
import cx from 'classnames';

import Button from 'components/Button';

import InstrumentHeder from './InstrumentHeder';
import CompanyMainBlock from './InstrumentMainBlock';

import style from './Instrument.module.scss';

export default function InstrumentComponent(props) {
    //#region props
    const {
        currency,
        complexity,
        description,
        howGenerateIncome,
        mainParameters,
        minusInvestment,
        name,
        plusInvestment,
        profitability,
        risk,
        shortDescription,
        slug,
    } = props;
    //#endregion

    return (
        <div className={cx(style.base)}>
            <div className={cx(style.container)}>
                {/* <InstrumentHeder
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
                ></InstrumentHeder> */}

                <div className={cx(style.content)}>
                    <div className={cx(style.mainBlock)}>
                        {/* <CompanyMainBlock
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
                        ></CompanyMainBlock> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
