import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

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
const CategoryItem = ({ notes }) => {
  const { id } = useParams();

  const filteredNotes = notes.filter((note) => {
    // Assuming the 'category' property in each note matches the 'name' in categories
    return (
      note.category === categories.find((cat) => cat.id === parseInt(id))?.name
    );
  });

  return (
    <>
      <Container>
        <h4>
          Category: {categories.find((cat) => cat.id === parseInt(id))?.name}
        </h4>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {filteredNotes.map((note) => (
            <Grid item key={note.id} xs={12} sm={6} md={4}>
              <div className="card white lighten">
                <div className="card-content black-text">
                  <span className="card-title">{note.title}</span>
                  <span className="card-title">{note.note}</span>
                </div>

                <hr />

                <div className="card-content black-text">
                  <Typography>Category: {note.category}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CategoryItem;
