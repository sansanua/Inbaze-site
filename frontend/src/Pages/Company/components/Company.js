import React from 'react';
import cx from 'classnames';

import CompanyHeder from './CompanyHeder';

import style from './Company.module.scss';

export default function CompanyComponent({
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
}) {
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

                <div>111</div>
            </div>
        </div>
    );
}
