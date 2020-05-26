import gql from 'graphql-tag';

export const CREATE_REQUEST_USER = gql`
    mutation createRequestUser($email: String, $name: String) {
        createRequestUser(input: { data: { email: $email, name: $name } }) {
            requestUser {
                email
                name
            }
        }
    }
`;
