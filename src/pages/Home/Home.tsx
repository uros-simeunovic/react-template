import axios from "axios";
import { useEffect } from "react";
import { Box } from "@mui/material";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://be-objects-main.onrender.com");
      console.log(response);
    };
    fetchData();
  }, []);

  return <Box>dasdasdas</Box>;
};

export default Home;
