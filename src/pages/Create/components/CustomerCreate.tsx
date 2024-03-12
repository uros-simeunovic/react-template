import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Typography, TextField, Button, Snackbar } from "@mui/material";
import axios from "axios";

interface ICustomer {
  name: string;
}

const CustomerCreate = () => {
  const [customer, setCustomer] = useState<ICustomer>({ name: "" });
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const createCustomer = async () => {
    const res = await axios.post(
      "https://be-vidoje.azurewebsites.net/customers",
      customer
    );
    console.log(res);
    setCustomer({ name: "" });
    setOpen(true);
    window.location.href = "/";
  };

  return (
    <>
      <Typography variant="h6" gutterBottom mt={10}>
        Create Customer
      </Typography>
      <TextField
        required
        id="name"
        name="name"
        label="Name"
        fullWidth
        autoComplete="given-name"
        variant="standard"
        value={customer.name}
        onChange={(e) => setCustomer({ name: e.target.value })}
      />
      <Button
        variant="contained"
        startIcon={<Add />}
        color="success"
        onClick={createCustomer}
        sx={{ mt: 3 }}
      >
        Create
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={"bottom" + "right"}
      />
    </>
  );
};

export default CustomerCreate;
