
import useProducts from "../useQuery/useProducts";
import Product from "./Product";
import Lottie from "lottie-react";
import animation from "../assets/Animation.json"

const Products = () => {
  const [products, isLoading] = useProducts([]);
  if(isLoading){
    return (
      <div className="flex justify-center min-h-screen">
        <Lottie animationData={animation} loop={true} />
      </div>
    );
    
  }

   
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
};

export default Products;