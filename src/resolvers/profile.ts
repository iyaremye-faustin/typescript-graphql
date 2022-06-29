import { Context } from "../index"

export const profile={
  Query:{
    profile:(parent:any,args:any,{prisma}:Context)=>{
      return prisma.profile.findMany();
    }  
  },

  Mutation:{
    createProfile:(parent:any,args:any,{prisma}:Context)=>{
      
    },   
  }
}