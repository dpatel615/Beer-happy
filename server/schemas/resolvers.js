//Needs to be adjusted to account for drinks instead of thoughts


const { AuthenticationError } = require('apollo-server-express');
const { User, Drink } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('drink');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('drink');
    },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('drink');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addComment: async (parent, { drinkId, commentText }, context) => {
      if (context.user) {
        return Drink.findOneAndUpdate(
          { _id: drinkId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeDrink: async (parent, { drinkId }, context) => {
      if (context.user) {
        const drink = await Drink.findOneAndDelete({
          _id: DrinkId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thought: drink._id } }
        );

        return drink;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { drinkId, commentId }, context) => {
      if (context.user) {
        return Drink.findOneAndUpdate(
          { _id: drinkId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;