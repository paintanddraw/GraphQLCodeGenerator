import { Resolvers, User} from "../resolvers-types";

const USERS = [
  {
    id: "1",
    email: "email@test.com",
    profile: {
      age: 20,
      name: "Dotan"
    }
  }
];

export const resolvers: Resolvers = {
  Query: {
    user: (parent, args) => {
      return USERS.find(u => u.id === args.id) as User;
    }
  }
};
