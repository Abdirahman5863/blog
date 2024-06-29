
import mongoose from "mongoose";

const BlogSchem = mongoose.Schema({
    title: string,
    description:string,
})
const Blog = mongoose.model.Blog || mongoose.model( "Blog", BlogSchem)



export default Blog