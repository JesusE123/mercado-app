
import { FaBasketShopping } from "react-icons/fa6";
import Form from "./components/form-add-product";
import ProductTable from "./components/product-table";


function App() {


  return (
    <>
      <div className='flex h-screen justify-center items-center flex-col'>
        <FaBasketShopping size={120}/>
        <h1 className='text-3xl mb-5'>Mercado App Calculator</h1>
        <Form />
        <ProductTable />
       
        </div>
     
    </>
  )
}

export default App
