import gql from 'graphql-tag';

export const CREATE_SUBSCRIBE_NEWS_USER = gql`
    mutation createSubscribeNewsUser($email: String) {
        createSubscribeNewsUser(input: { data: { email: $email } }) {
            subscribeNewsUser {
                email
            }
        }
    }
`;
