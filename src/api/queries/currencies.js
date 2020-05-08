import gql from 'graphql-tag';

export const CURRENCIES = gql`
    query currencies {
        currencies {
            name
            slug
        }
    }
`;
