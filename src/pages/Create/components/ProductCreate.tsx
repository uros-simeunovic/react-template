import { useState } from 'react'
import { Add } from '@mui/icons-material'
import { Typography, TextField, Button, Grid } from '@mui/material'
import axios from 'axios'

interface IProduct {
  description: string;
  price: number;
}

const ProductCreate = () => {
    const [product, setProduct] = useState<IProduct>({description: "", price: 0})

    const createProduct = async () => {
        console.log(product)
        const res = await axios.post('http://localhost:8080/products', product);
        console.log(res);
        window.location.href = '/';
    }


    return (
        <div>
            <Typography variant="h6" gutterBottom marginTop={10}>
            Create Product
            </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="description"
                name="description"
                label="Description"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard"
                value={product.description}
                onChange={(e) => setProduct({description: e.target.value, price: product.price})}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="price"
                name="price"
                label="Price"
                type='number'
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                value={product.price}
                onChange={(e) => setProduct({description: product.description, price: parseInt(e.target.value)})}
                />
            </Grid>
            </Grid>
            <Button variant='contained' startIcon={<Add />} color='success' onClick={createProduct} sx={{ mt: 3 }}>Create</Button>
        </div>
    )
}

export default ProductCreate