import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";
import "./CustomSwal.css"
import { useMutation, useQueryClient } from "react-query";
import deleteProduct from "../useQuery/deleteProduct";
const Product = (product) => {
  const item = product.product;
  const [rating, setRating] = useState(0);
  const queryClient = useQueryClient();
   

  const mutation = useMutation((id) => deleteProduct(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });

  const handleRating = (value) => {
    setRating(value);
  };

  const handleDelete = async (id) => {
    const confirmation =await Swal.fire({
      title: "Delete Product?",
      text: `Are you sure you want to delete “${item?.title}” from your lists?`,
      showCancelButton: true,
      cancelButton: "#FFFFFF",
      confirmButtonColor: "#E50000",
      confirmButtonText: "Delete",
      confirmButtonTextColor: "#000000",
    })

      if (confirmation.isConfirmed) {
         await mutation.mutateAsync(id); 
        queryClient.invalidateQueries("products");
        Swal.fire("Deleted!", "Your Product has been deleted.", "success");
      }
    
  };

  return (
    <div className="card bg-base-100 shadow-xl border rounded-md">
      <div className="flex h-[280px] justify-center">
        <img
          className="max-w-[200px] object-contain"
          src={item?.image}
          alt=""
        />
      </div>
      <div className="card-body p-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold">${item?.price}</h2>
            <div className="flex items-center gap-2">
              <Rating
                initialRating={item?.rating.rate}
                emptySymbol={<FaStar style={{ color: "#D4CDC5" }} />}
                fullSymbol={<FaStar style={{ color: "#FF9017" }} />}
                onChange={(value) => handleRating(value)}
              />
              <span className="text-xl font-bold text-[#FF9017]">
                {rating === 0 ? item?.rating.rate : rating.toFixed(1)}
              </span>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleDelete(item?.id)}
              className="shadow-xl border p-2 rounded-md"
            >
              <AiOutlineDelete className="text-red-500 font-bold text-xl" />
            </button>
          </div>
        </div>
        <div>
          <p className="text-[#606060]">
            {item?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
