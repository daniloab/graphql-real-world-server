import { GraphQLObjectType } from "graphql";
import LikeType from "./LikeType";

const LikeNewPayload = new GraphQLObjectType({
  name: "LikeNewPayload",
  fields: () => ({
    like: {
      type: LikeType,
      resolve: (obj) => obj.like,
    },
  }),
});

const LikeNewSubscription = {
  name: "LikeNew",
  type: LikeNewPayload,
  args: {},
  subscribe: (input, context) => {},
  resolve: () => ({}),
};

export default LikeNewSubscription;
