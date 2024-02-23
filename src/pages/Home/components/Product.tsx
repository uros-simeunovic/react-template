// import { IProduct } from "../Home"
import { Grid, Typography, Card, CardContent, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

interface IProduct {
  description?: string;
  price?: number;
  _links: {
    product: {
      href: string;
    };
  };
}

const Product = ({description, price, _links}: IProduct) => {

  const handleDelete = async () => {
    const response = await axios.delete(_links.product.href);
    console.log(response);
  }

  return (
    <Grid item md={6}>
      <Card sx={{maxWidth: 345}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {description}
          </Typography>
          <Typography>
            Cena: {price}
          </Typography>
          <IconButton size="large" component={DeleteIcon} onClick={handleDelete}/>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Product