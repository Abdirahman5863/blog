
import mongoose from "mongoose";

const BlogSchem = mongoose.Schema({
    title: String,
    description:String,
})
const Blog = mongoose.models.Blog || mongoose.models( "Blog", BlogSchem)



export default Blog