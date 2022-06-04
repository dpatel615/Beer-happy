import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      name
    }
  }
`;

export const QUERY_DRINKS = gql`
  query getDrinks
`

export const QUERY_SINGLE_DRINK = gql`
  query getSingleDrink($drinkId: ID!) {
    drink(_id: $_id) {
      _id
      comments
    }
  }
`;