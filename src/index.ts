import { ApolloServer } from "apollo-server";
import { PrismaClient} from "@prisma/client";
import {typeDefs} from './schema'
import {queries,mutations}  from "./resolvers";


export interface Context{
  prisma:PrismaClient
}


const prisma =new PrismaClient();

export const server=new ApolloServer({
  typeDefs,
  resolvers:{
    "Query":queries,
    "Mutation":mutations
  },
  context:{
    prisma
  }
})

const port =process.env["PORT"];
server.listen({port}).then(({url})=>{
  console.log(`Server started at ${url}`);
})

function readFile(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
