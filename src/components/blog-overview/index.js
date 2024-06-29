"use client";
import { useState } from "react";
import AddNewBlog from "../add-new-blog";
const InitialFormBlogdata = {
  title: "",
  description: "",
};
export default function BlogOverview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formBlogdata, setFormBlogdata] = useState(InitialFormBlogdata);
  const [Loading, setLoading] = useState(false);

  async function HandleAddBlog() {
    try {
      setLoading(true);
      const apiResponse = await fetch ("/api/add-blog", {
        method : "Post",
        body : JSON.stringify(formBlogdata),
      });
      const result = await apiResponse.json();
      console.log(result);
    }catch (error) {
      console.log(error);
      setFormBlogdata(InitialFormBlogdata);
      setLoading(false);
    }
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
      />
      <div>Blog list section</div>
    </main>
  );
}
