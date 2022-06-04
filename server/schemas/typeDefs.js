const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    drinks: [Drink]!
}

type Drink {
    _id: ID
    name: String
    isAlcoholic: Boolean
    comments: [Comment]!
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: string
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(username: String!): User
    drinks(username: String): [Drink]
    drink(drinkId" ID!): Drink
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(drinkId: ID!, commentText: String!): Drink 
    removeComment(drinkId: ID!, commentId: ID!): Drink
}
`

module.exports = typeDefs;