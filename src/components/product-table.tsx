import { useContext } from "react";
import { ProductContext } from "../context/productContext";

import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ProductTable = () => {

  const {products,updateProduct} = useContext(ProductContext)!;

  function formatCurrency(value:number) {
    return value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2
    });
  }

  let total = 0;
  products.forEach((product) => {
    total+= product.price * product.quantity
  })


  const handleIncrement = (index:number) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    updateProduct(updatedProducts);
  };

  const handleDecrement = (index:number) => {
    const updatedProducts = [...products];
    
    if (updatedProducts[index].quantity === 1) {
      // Remove product if quantity is 1
      updatedProducts.splice(index, 1);
    } else if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
    }
    updateProduct(updatedProducts);
  };
  

  return (
  
    <div className="card mt-5 overflow-auto h-64">
      <TableContainer component={Paper} sx={{backgroundColor:'transparent', boxShadow:60, overflow:'auto', maxWidth:'100'}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}}>PRODUCT</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>PRICE</TableCell>
              <TableCell align="inherit" sx={{fontWeight:'bold'}}>QUANTITY</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>AMOUNT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
              <TableCell>{product.product.toUpperCase()}</TableCell>
              <TableCell align="right">{formatCurrency(product.price)}</TableCell>
              
             
              <TableCell align="right" sx={{width:50, margin:0}}>

              <CiCirclePlus className="hover:scale-110 transition inlien-flex" size={30}  onClick={() => handleIncrement(index)}/> 
                {product.quantity}
                <CiCircleMinus className="hover:scale-110 transition inlien-flex" size={30} onClick={() => handleDecrement(index)}/>
              </TableCell>
              
            
            
              
              <TableCell align="right">
              {formatCurrency(product.quantity * product.price)}
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     
      <span className="font-bold text-black flex justify-end mt-3">Total : {formatCurrency(total)}</span>
    </div>
    
  );
};

export default ProductTable;
