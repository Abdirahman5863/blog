"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function AddNewBlog({
  openDialog,
  setOpenDialog,
  Loading,
  HandleAddBlog,
  formBlogdata,
  setFormBlogdata,
  currentEditBlog,
  setCurrentEditBlog
}) {
  return (
    <>
      <div>
        <Button variant="outline" onClick={() => setOpenDialog(true)
          
        }>
          Add Blog
        </Button>
      </div>
      <Dialog open={openDialog} onOpenChange={

    () => {
    setCurrentEditBlog(false)
        setOpenDialog(false)
        setFormBlogdata({
            title: "",
            description: "",

        })
        
        
    }
      }>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{ currentEditBlog ?"Edit Blog"  :"Add Blog"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                placeHolder="Title of the Blog"
                className="col-span-3"
                value={formBlogdata.title}
                onChange={(event) =>
                  setFormBlogdata({
                    ...formBlogdata,
                    title: event.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right ">
                Description
              </Label>
              <Input id="description" className="col-span-3" placeHolder="Blog description.." value={formBlogdata.description}
               onChange={ (event) => setFormBlogdata(
                {
                    ...formBlogdata,
                    description:event.target.value
                }
               )}
              
              
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={HandleAddBlog}>
                {
                    Loading ? 'Saving Changes':'Save Changes'
                }
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
