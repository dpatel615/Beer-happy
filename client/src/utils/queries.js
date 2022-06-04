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
  query getDrinks { 
    drinks {
      _id
      drinkText
      createdAt
      isAlcoholic
      haveMade
      comments
    }
  }
`

export const QUERY_SINGLE_DRINK = gql`
  query getSingleDrink($drinkId: ID!) {
    drink(_id: $_id) {
      _id
      comments
      drinkText
      isAlcoholic
      haveMade
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      drinks {
        _id
        drinkText
        createdAt
        isAlcoholic
        haveMade
      }
    }
  }
`;
