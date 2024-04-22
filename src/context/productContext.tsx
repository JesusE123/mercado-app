import { createContext, useState , ReactNode } from "react";

import { product } from "../types/product";
interface ProductContextType {
    products: product[]; // Aquí puedes cambiar el tipo según la estructura real de tus productos
    setProducts: React.Dispatch<React.SetStateAction<product[]>>;
    updateProduct: (updatedProducts: product[]) => void;
  }
  export const ProductContext = createContext<ProductContextType | undefined>(undefined);

  interface ProductProviderProps {
    children: ReactNode;
  }
  export const ProductProvider: React.FC<ProductProviderProps> = ({children}) => {
    const [products, setProducts] = useState<product[]>([]);
    const updateProduct = (updatedProducts: product[]) => {
      setProducts(updatedProducts);
    };
  

    return (
        <ProductContext.Provider value={{products, setProducts, updateProduct}}>
            {children}
        </ProductContext.Provider>
    )
}
