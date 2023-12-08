import { Typography, Grid, Box, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Category = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: 1,
      name: "Arts",
    },
    {
      id: 2,
      name: "Business",
    },
    {
      id: 3,
      name: "Computers",
    },
    {
      id: 4,
      name: "Games",
    },
    {
      id: 5,
      name: "Health",
    },
    {
      id: 6,
      name: "Home",
    },
    {
      id: 7,
      name: "Kids and Teens",
    },
    {
      id: 8,
      name: "News",
    },
    {
      id: 9,
      name: "Recreation",
    },
    {
      id: 10,
      name: "Reference",
    },
    {
      id: 11,
      name: "Regional",
    },
    {
      id: 12,
      name: "Science",
    },
    {
      id: 13,
      name: "Shopping",
    },
    {
      id: 14,
      name: "Society",
    },
    {
      id: 15,
      name: "Sports",
    },
    {
      id: 16,
      name: "World",
    },
  ];

  const handleClick = (id) => {
    navigate(`/category/${id}`);
  };
  return (
    <>
      <Container sx={{ mt: "35px" }}>
        <Typography variant="h4">All Categories</Typography>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          {categories.map((item) => (
            <Grid item key={item} xs={6} sm={6} md={4} lg={3}>
              <Box
                style={{
                  backgroundColor: getRandomColor(),
                  padding: "20px",
                  borderRadius: "8px",
                  color: "white", // text color
                  cursor: "pointer",
                }}
                onClick={() => handleClick(item.id)}
              >
                {item.name}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Category;
