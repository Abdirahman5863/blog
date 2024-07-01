
import connectToDb from "@/datebase"
import { NextResponse } from "next/server"
import Blog from "@/models/blog";
import Joi from "joi";
const EditNewBlog = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

export async function PUT(req){
    try{
   await connectToDb()

   const {searchParams} = new URL(req.url)
   const getCurrentBlogId = searchParams.get('id')
   if(!getCurrentBlogId){
    return NextResponse.json(
        {
            success:false,
            message:"Blog Id required try again"
        }
    )

   }
   const{title,description} = await req.json()
   const { error } = EditNewBlog.validate({
    title,
    description,
  });

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.details[0].message,
    });
  }
const updateBlog= await Blog.findOneAndUpdate({
   _id:getCurrentBlogId},{
        title,description,
    },
    {new:true}
)
if(updateBlog){
    return NextResponse.json({
        success:true,
        message:" Blog Sucessfully Updated"
    })
}else{
    return NextResponse.json({
        success:false,
        message:"Something went wrong, please try again "
})
}}catch(error){console.log(error)
    return NextResponse.json({
    success:false,
    message:"Something went wrong, please try again "
})

    }
}