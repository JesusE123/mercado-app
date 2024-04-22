import React, { useContext  } from "react";
import { ProductContext } from "../context/productContext";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const Form = () => {
 const { setProducts } = useContext(ProductContext)!;

  
  return (
    <>
      <Formik
        initialValues={{ product: "", price: 1, quantity: 1 }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setProducts((prevState) => [...prevState, values]);
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Product"
            type="text"
            name="product"
            onChange={handleChange}
            variant="outlined"
            value={values.product}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Price"
            type="number"
            name="price"
            onChange={handleChange}
            value={values.price}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Quantity"
            type="number"
            name="quantity"
            onChange={handleChange}
            value={values.quantity}
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button variant="contained" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Loading...' : 'Add Product'}
        </Button>
      </div>
    </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
