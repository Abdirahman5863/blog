import connectToDb from "@/datebase"
import Blog from "@/models/blog"
import { NextResponse } from "next/server"

export async function GET(){
try{
    await connectToDb()
    const extractalldata = await Blog.find({})
    if(extractalldata){
        return NextResponse.json({
            success:true,
            data:extractalldata
        })
    }else{
        return NextResponse.json(
            {
                success:false,
                message:"failed try again later"
            })

    }
}catch(error){
console.log(error)
return NextResponse.json(
    {
        success:false,
        message:"failed try again later"
    }
)
}

}