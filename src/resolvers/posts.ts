import { Context } from "../index"

interface PostCreateArgs{
  title: String
  content: String,
  published: Boolean
}
interface findByIdArgs{
  id:Number
}

interface updatePostArgs{
  title?: String
  content?: String,
}

export const posts={
  Query:{
    post:(parent:any,args:findByIdArgs,{prisma}:Context)=>{
      const id=Number(args.id);
      return prisma.post.findFirst({
        where: { id },
      });
    },

    posts:(parent:any,args:PostCreateArgs,{prisma}:Context)=>{
      return  prisma.post.findMany(
        {
          orderBy:[
            {
              createdAt:"desc"
            },
          ]
        }
      );
    },  
  },

  Mutation:{
    postCreate:async(parent:any,args:any,{prisma}:Context)=>{
      return await prisma.post.create(args);
    },

    updatePost:async(_:any,{data,postId}:{postId:String,data:updatePostArgs},{prisma}:Context)=>{
      const {title,content}=data;
      if (!title && !content) {
        return {
          message:"Need to have atleast one field to update"
        }
      }
      const existPost=await prisma.post.findUnique({
        where:{
          id:Number(postId),
        }
      });
      if (!existPost) {
        return {
          message:"Post does not exist"
        }
      }
      const update={};
      if(!data.title) delete data.title;
      if(!data.content) delete data.content;
      return await prisma.post.update({
        where:{
          id:Number(postId)
        },
        data:{
          title:"testing",
          content:"testing content"
        },
      })
    }
  }
}