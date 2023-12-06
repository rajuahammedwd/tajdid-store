const deleteProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
    });
    const data = await res.json();
  return data;
}
export default deleteProduct;