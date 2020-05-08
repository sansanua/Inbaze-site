import gql from 'graphql-tag';

export const PROFITABILITIES = gql`
    query profitabilities {
        profitabilities {
            name
            slug
        }
    }
`;
