import BlogOverview from "../../components/blog-overview";
async function FetchingListBlog(){
try{
const apiResponse = await fetch('http://localhost:3000/api/get-blogs',
  {
    method:"GET",
    cache:"no-store"

  }
)
const result = await apiResponse.json()
return result.data


}catch(error){
  throw new Error(error)
}


}

export default async function BlogAdd() {
  const Bloggetlist = await FetchingListBlog()
  return <BlogOverview Bloggetlist={Bloggetlist}/>;
}
