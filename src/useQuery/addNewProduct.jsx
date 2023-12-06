import { useMutation } from "react-query";

const useAddNewProduct = (data) => {
  console.log(data,"Amio Paisi data eai page ea")
  const addNewProduct = useMutation(async (data) => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to add new product");
    }

    return response.json();
  });

  return {
    addNewProduct,
  };
};
export default useAddNewProduct;
