import gql from 'graphql-tag';

export const COMPANIES_FILTERED = gql`
    query companiesFilteredBySlug(
        $instruments: [String]
        $minimumInvestmentAmount: Int
        $investmentCurrency: [String]
    ) {
        companies(
            where: {
                instruments: { slug_in: $instruments }
                minimumInvestmentAmount_gte: $minimumInvestmentAmount
                investmentCurrency: { slug_in: $investmentCurrency }
            }
        ) {
            capital
            companyCommission
            complexity
            created_at
            currencyIncome {
                name
                slug
                symbol
            }
            description
            descriptionOfCooperation
            documentsActivities
            documentsFromInvestor
            documentsSecuringRights
            historicalProfitability
            id
            incomePaymentProcess
            instruments {
                name
                slug
            }
            investmentCurrency {
                name
                slug
                symbol
            }
            liquidity
            liquidityOfInvestment
            minimumInvestmentAmount
            minimumInvestmentPeriod
            name
            numberOfClients
            onlineInvestmentStatusTracking
            optimalInvestmentPeriod
            otherServiceCharges
            payingTaxesIncome
            placeOfStorageFunds
            processOfGeneratingIncome
            processOfManagingMoney
            risk
            risksOfLossInvested
            site
            startYear
            typeOfIncome
            updated_at
        }
    }
`;
