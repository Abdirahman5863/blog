"use client";
import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import connectToDb from "@/datebase";
const InitialFormBlogdata = {
  title: "",
  description: "",
};
export default function BlogOverview({ Bloggetlist }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [formBlogdata, setFormBlogdata] = useState(InitialFormBlogdata);
  const [Loading, setLoading] = useState(false);
  const[currentEditBlog , setCurrentEditBlog] = useState(null)
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  async function HandleAddBlog() {
    try {
      setLoading(true);
      const apiResponse = currentEditBlog !== null ? await fetch(`/api/update-blog?id=${currentEditBlog}`,
       {method:"PUT",
        body:JSON.stringify(formBlogdata)
       }
      ) :await fetch("/api/add-blog", {
        method: "Post",
        body: JSON.stringify(formBlogdata),
      });
      const result = await apiResponse.json();
      if (result?.success) {
        setFormBlogdata(formBlogdata);
        setCurrentEditBlog(null)
        setLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setFormBlogdata(InitialFormBlogdata);
      setLoading(false);
      setCurrentEditBlog(false)
    }
  }
  async function HandleDeleteBlog(getCurrentBlogId) {
    try {
      const apiResponse = await fetch(
        `/api/delete-blog?id=${getCurrentBlogId}`,
        { method: "DELETE" }
      );
      const result = await apiResponse.json();

      if (result.success) return router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
async function HandleUpdateBlog(getCurrentBlog){

  setCurrentEditBlog(getCurrentBlog._id)
  setFormBlogdata(
    getCurrentBlog?.title,
    getCurrentBlog?.description
  )
  setOpenDialog(true)


}

  return (
    <main className="flex min-h-screen gap-7 flex-col  p-24 bg-gradient-to-r from-blue-300 to-blue-600">
      <AddNewBlog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        HandleAddBlog={HandleAddBlog}
        Loading={Loading}
        formBlogdata={formBlogdata}
        setFormBlogdata={setFormBlogdata}
        currentEditBlog={currentEditBlog}
        setCurrentEditBlog={setCurrentEditBlog}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-10">
        {Bloggetlist && Bloggetlist.length > 0
          ? Bloggetlist.map((list) => (
              <Card className="p-4">
                <CardContent className="">
                  <CardTitle>{list.title}</CardTitle>
                  <CardDescription className="mt-5">
                    {list.description}
                  </CardDescription>
                  <div className="flex gap-10 items-center mt-6">
                    <Button onClick={()=>HandleUpdateBlog(list)}>Edit</Button>
                    <Button onClick={() => HandleDeleteBlog(list._id)}>
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          :<label className="font-bold text-2xl text-red-600">No Blog Found!, Please Add One</label> }
      </div>
    </main>
  );
}
