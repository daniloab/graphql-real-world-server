import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const LikeType = new GraphQLObjectType({
  name: "Like",
  fields: () => ({
    count: {
      type: GraphQLNonNull(GraphQLString),
      resolve: (obj) => obj.count,
    },
  }),
});

export default LikeType;
