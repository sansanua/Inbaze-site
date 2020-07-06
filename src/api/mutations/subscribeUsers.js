import gql from 'graphql-tag';

export const CREATE_SUBSCRIBE_USER = gql`
    mutation createSubscribeUser($email: String, $instrument: String) {
        createSubscribeUser(input: { data: { email: $email, instrument: $instrument } }) {
            subscribeUser {
                email
                instrument
            }
        }
    }
`;
