import gql from 'graphql-tag';

export const INSTRUMENTS = gql`
    query instruments {
        instruments(sort: "id:asc") {
            name
            slug
            shortDescription
            disabled
        }
    }
`;

export const INSTRUMENT_BY_SLUG = gql`
    query instrumentBySlug($slug: String) {
        instruments(where: { slug: $slug }) {
            currency {
                name
                symbol
                slug
            }
            complexity
            description
            howGenerateIncome
            mainParameters
            minusInvestment
            name
            plusInvestment
            profitability
            risk
            shortDescription
            slug
        }
    }
`;
