import React from "react";
import Prod from "../fprod.json";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Box, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Swal from "sweetalert2";

const Fruits = ({ handleClick }) => {
  const style = {
    fontSize: "20px",
  };

  return (
    <Container maxWidth={false} maxHeight={false}>
      <Typography mt={8} variant="h1" component="h2">
        Fruits
      </Typography>
      <Box
        sx={{
          maxwidth: "200px",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {Prod.map((ele) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                marginBlock: 2,
                boxShadow: 20,
                marginInline: 2,
              }}
            >
              <CardMedia
                component="img"
                height="194"
                image={ele.image}
                alt={ele.name}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {ele.name}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {ele.description}
                </Typography>
                <Typography variant="h5" component="h2">
                  ₹{ele.price}
                  <span style={{ fontSize: "15px" }}> Per Kg</span>
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
};

export default Fruits;