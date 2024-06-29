import connectToDb from "@/datebase";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const addNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export default async function POST(req) {
  try {
    await connectToDb();
    const extractAddedBlog = await req.json();
    const { title, description } = extractAddedBlog;
    const { error } = addNewBlog.validate({
      title,
      description,
    });
    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }
    const NewlyAddBlog = await Blog.create(extractAddedBlog);
    if (NewlyAddBlog) {
      return NextResponse.json({
        success: true,
        message: "Blog succussefully created",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed,try gain later",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Failed,try again Please",
    });
  }
}
