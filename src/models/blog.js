const mongoose = require("mongoose")

const BlogSchem = mongoose.Schema({
    title: String,
    description: String,
})
const Blog = mongoose.models.Blog || mongoose.model( "Blog", BlogSchem)



export default Blog