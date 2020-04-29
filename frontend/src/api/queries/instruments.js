import gql from 'graphql-tag';

export const INSTRUMENTS = gql`
    query instruments {
        instruments {
            name
            slug
        }
    }
`;
