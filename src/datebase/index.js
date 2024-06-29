import mongoose from "mongoose";
const connectToDb= async () =>{
    const ConnectionUrl ="mongodb+srv://Usama:E1QHOTsuo8adIyQm@cluster0.nhqo69x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(ConnectionUrl).then(()=>{console.log("blog database successfully connected")}).catch((error)=> console.log(error)
)


}
export default connectToDb