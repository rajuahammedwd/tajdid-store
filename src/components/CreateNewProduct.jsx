import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import AddNewProduct from "../useQuery/addNewProduct";


const CreateNewProduct = () => {
  const [image, setImage] = useState(null);
  const { register, handleSubmit } = useForm();
 const zodSchema = z.object({
   title: z.string(),
   price: z
     .number({
       required_error: "Price is required",
       invalid_type_error: "Price must be a number",
     })
     .nonnegative({ message: "Price cannot be negative" }),
   description: z.string(),
 });
 const onSubmit = async (data) => {
   const formData = {
     ...data,
     price: Number(data.price),
   };
   const zodValidation = zodSchema.safeParse(formData);
   if (!zodValidation.success) {
     console.log("something went wrong", zodValidation.error);
   } else {
     const result = await AddNewProduct(zodValidation.data);
     console.log(result);
   }
 };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  const handleImageChange = (file) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const onFileSelectClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };
  return (
    <div className="w-full px-10 my-5 bg-[#FCFCFD]">
      {/* Header */}

      {/* Form */}
      {/*  */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:lg:flex items-center justify-between mb-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">Create New Product</h2>
            <p>Upload your product photo and details here.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/"}>
              <button className="btn border shadow-md px-4 py-2 rounded-md">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="btn bg-blue-500 shadow-md px-4 py-2 rounded-md text-white"
            >
              Create
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 py-3 border-b">
          <label className="col-span-1 text-xl">Title</label>
          <input
            className="col-span-2 input input-bordered p-3 border rounded-md"
            type="text"
            placeholder="Product name"
            {...register("title", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="grid grid-cols-3 py-3 border-b">
          <label className="col-span-1 text-xl">Price</label>
          <input
            className="col-span-2 input-bordered p-3 border rounded-md"
            type="number"
            placeholder="Price"
            {...register("price", {
              required: true,
              maxLength: 12,
            })}
          />
        </div>
        <div className="grid md:lg:grid-cols-3 py-3 border-b lg:h-80">
          <div>
            <label className="text-xl">Product Photo</label>
            <p>This will be displayed on your product</p>
          </div>
          <div className="bg-white overflow-hidden">
            {image && (
              <div>
                <img
                  src={image}
                  alt="Uploaded"
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
              </div>
            )}
          </div>
          <div className="flex items-center justify-center border">
            <div>
              <div
                className=""
                style={{
                  padding: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={onFileSelectClick}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  onChange={handleInputChange}
                  style={{ display: "none" }}
                />
                <div className="flex flex-col items-center">
                  <AiOutlineCloudUpload />
                  <p>
                    <small>
                      <span className="text-blue-500">Click to upload</span> or
                      drag and drop
                    </small>
                  </p>
                  <p>
                    <small>svg, png, or jpg (max,300 * 300px)</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 py-3">
          <label className="text-xl">Description</label>
          <textarea
            placeholder="Description"
            rows={6}
            cols={40}
            className="col-span-2 h-32 input p-3 input-bordered border rounded-md"
            {...register("description", { required: true })}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNewProduct;
