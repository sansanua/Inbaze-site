import gql from 'graphql-tag';

export const COMPANIES_FILTERED = gql`
    query companiesFilteredBySlug(
        $instruments: [String]
        $minimumInvestmentAmount: Int
        $investmentCurrency: [String]
        $profitabilities: [String]
    ) {
        companies(
            where: {
                instruments: { slug_in: $instruments }
                minimumInvestmentAmount_gte: $minimumInvestmentAmount
                investmentCurrency: { slug_in: $investmentCurrency }
                profitability: { slug: $profitabilities }
            }
        ) {
            id
            image{
                url
            }
            complexity
            description
            historicalProfitability
            minimumInvestmentAmount
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
