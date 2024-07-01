import connectToDb from "@/datebase"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export async function DELETE(req){
    try{
        await connectToDb()
        const{searchParams}= new URL(req.url)
        const getCurrentBlogId = searchParams.get('id')
        if(!getCurrentBlogId){
            return NextResponse.json({
                success:false,
                message:"Blog Id is required"
            })
        }

        const deleteachblog= await  Blog.findByIdAndDelete(getCurrentBlogId)
if(deleteachblog){
    return NextResponse.json({
        success:true,
        message:"The blog successfully deleted"
    })
}
else{return NextResponse.json({
            success:false,
            message:"Failed to delete ,try again"
        })
    }

    }catch(error){
        console.log(error)
        return NextResponse.json({
            success:false,
            message:"Failed to delete ,try again"
        })
    }

}