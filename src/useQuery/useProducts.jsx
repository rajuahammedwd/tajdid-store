import { useQuery } from "react-query";
const useProducts = () => {
    const { data: products = [], isLoading,refetch } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            return data;
        },
    });
    return [products, isLoading,refetch];
}
export default useProducts;