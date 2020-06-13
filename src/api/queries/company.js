import gql from 'graphql-tag';

export const COMPANIES_FILTERED = gql`
    query companiesFilteredBySlug(
        $instruments: [String]
        # $minimumInvestmentAmount: Int
        # $investmentCurrency: [String]
        $profitabilities: [String]
    ) {
        companies(
            where: {
                instruments: { slug_in: $instruments }
                # minimumInvestmentAmount_gte: $minimumInvestmentAmount
                # investmentCurrency: { slug: $investmentCurrency }
                profitability: { slug: $profitabilities }
            }
        ) {
            id
            image {
                url
            }
            complexity
            description
            disabled
            historicalProfitability
            secondHistoricalProfitability
            minimumInvestmentAmount
            secondMinimumInvestmentAmount
            name
            risk
            instruments {
                name
                slug
            }
            investmentCurrency {
                name
                slug
                symbol
            }
            secondInvestmentCurrency {
                name
                slug
                symbol
            }
        }
    }
`;

export const COMPANY = gql`
    query company($id: ID!) {
        company(id: $id) {
            id
            image {
                url
            }
            aboutCompany
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
            secondHistoricalProfitability
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
            secondInvestmentCurrency {
                name
                slug
                symbol
            }
            liquidity
            liquidityOfInvestment
            minimumInvestmentAmount
            secondMinimumInvestmentAmount
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
