import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import UserType from "../modules/UserType";

const CreateUserInputType = new GraphQLInputObjectType({
  name: "CreateUserInput",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    CreateUser: {
      type: UserType,
      description: "Create a new user",
      args: {
        input: {
          type: CreateUserInputType,
        },
      },
      resolve: (_, args) => {
        return {
          name: args.name,
        };
      },
    },
  }),
});
