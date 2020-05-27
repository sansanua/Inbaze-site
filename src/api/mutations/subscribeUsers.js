import gql from 'graphql-tag';

export const CREATE_SUBSCRIBE_USER = gql`
    mutation createSubscribeUser($email: String) {
        createSubscribeUser(input: { data: { email: $email } }) {
            subscribeUser {
                email
            }
        }
    }
`;
