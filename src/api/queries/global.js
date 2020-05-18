import gql from 'graphql-tag';

export const GLOBAL = gql`
    query global {
        global{
            dollarExchangeRate
        }
    }
`;
