import {gql} from "apollo-server";
export const typeDefs=gql `
  type Query {
    posts:[Post!]!
    post(id: ID!):Post
    profile(id: ID!):Profile
  }

  type Mutation {
    postCreate(data: createPostInput):Post!
    createProfile(input: createtProfileInput): Profile!
    updatePost(postId:ID!,data:updatePostInput!):Post    
    createUser(input: createUserInput): User!
  }

  type Post {
  id: ID!
  title: String!
  content: String,
  createdAt: String,
  published: Boolean!
  author: User
}

type User {
  id:ID!
  name: String!
  email: String!
  profile: Profile 
  post:[Post!]!  
}

type Profile {
  id:ID!
  bio: String!
  user:User!
}

type UserError {
  message: String!
}

input createPostInput {
  title: String!
  content: String!,
  published: Boolean! 
}

input updatePostInput {
  title: String
  content: String, 
}

input createtProfileInput {
  bio: String!
  user: String!
}

input createUserInput {
  name: String!
  email: String!
  profile: String 
}

type postError {
  message: String!
}

type postCreatePayload {
  PostError:[postError!]!
  post:Post
}
`;