import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import { Container, Grid } from "@mui/material";

export interface IProduct {
  description?: string;
  price?: number;
  _links: {
    product: {
      href: string;
    };
  };
}

const Home = () => {
  const [products, setProducts] = useState<Array<IProduct> | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://be-vidoje.azurewebsites.net/products"
      );
      setProducts(response.data._embedded.products);
    };
    fetchData();
  }, [JSON.stringify(products)]);

  return (
    <Container>
      <Grid container spacing={3} mt={1}>
        {products?.map((item: IProduct, index: number) => (
          <Product key={index} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
