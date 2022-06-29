import { posts } from "./posts";
import { profile } from "./profile";
import { user } from "./user";
export const queries={
  ...posts.Query,
  ...profile.Query,
  ...user.Query
}
export const mutations={
  ...posts.Mutation,
  ...profile.Mutation,
  ...user.Mutation
}


