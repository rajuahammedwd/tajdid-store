
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
// import useAddNewProduct from "../useQuery/addNewProduct";
import { Link } from "react-router-dom";

const CreateNewProduct = () => {
  const [image, setImage] = useState(null);
  // const {addNewProduct} = useAddNewProduct();
  const { register, handleSubmit,reset } = useForm();

  // const handleSubmit = async (data) => {
  //   try {
  //     await addNewProduct.mutateAsync(data);
  //     reset();
  //   } catch (error) {
  //     console.error("Error adding product:", error);
  //   }
  // };


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
            className="btn bg-blue-500 shadow-md px-4 py-2 rounded-md text-white"
          >
            Create
          </button>
        </div>
      </div>
      {/* Form */}
      {/*  */}
      <form>
        <div className="grid grid-cols-3 py-3 border-b">
          <label className="col-span-1 text-xl">Title</label>
          <input
            className="col-span-2 input p-3 border rounded-md"
            type="text"
            placeholder="Product name"
            {...register("title", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="grid grid-cols-3 py-3 border-b">
          <label className="col-span-1 text-xl">Price</label>
          <input
            className="col-span-2 input p-3 border rounded-md"
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
            placeholder="description"
            className="col-span-2 input p-3 border rounded-md"
            {...register("description", { required: true })}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CreateNewProduct;
