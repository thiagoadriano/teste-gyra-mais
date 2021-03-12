import {gql} from '@apollo/client';

export const CREATE_NICKNAME = gql`
  mutation CreateUser($name: String!) {
    createUser(user: {nickname: $name}) {
      id
      nickname
    }
  }
`;
