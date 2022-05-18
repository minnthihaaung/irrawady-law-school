import { Container, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Books = () => {
  const [category, setCategory] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  // const DATA = [
  //   {
  //     bookName: "Java Pro book with long name and long long",
  //     link: "something",
  //   },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  //   { bookName: "Java Pro book", link: "something" },
  // ];

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  let xsNum = 0;

  if (isUpMd) {
    xsNum = 2;
  } else if (isUpSm) {
    xsNum = 4;
  } else {
    xsNum = 6;
  }

  useEffect(() => {
    fetch("https://serene-shore-31305.herokuapp.com/api/v1/books")
      .then((res) => res.json())
      .then((json) => {
        setBooks(json.books);
      });
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "sticky",
          borderBottom: "1px solid #e8e9eb",
          background: "white",
          top: 0,
          mt: 5,
          mb: 5,
          p: 3,
        }}
      >
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="select-category-label">Category</InputLabel>
          <Select
            labelId="select-category-label"
            id="select-category"
            value={category}
            autoWidth
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>category 1</MenuItem>
            <MenuItem value={20}>category 2</MenuItem>
            <MenuItem value={30}>category 3</MenuItem>
          </Select>
        </FormControl>
        <Paper
          variant="outlined"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 250,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Book"
            inputProps={{ "aria-label": "search book" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Grid container spacing={2} mt={1}>
        {books.map((book, index) => (
          <Grid item xs={xsNum} key={index}>
            <Paper variant="outlined">
              <Box
                sx={{
                  my: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <LibraryBooksIcon sx={{ m: 1 }} />

                <Typography
                  variant="subtitle1"
                  sx={{ mt: 1, textAlign: "center", p: 1 }}
                >
                  {book.name}
                </Typography>

                <Box m={1}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      position: "static",
                      width: "100%",
                      textTransform: "none",
                    }}
                  >
                    Download
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Books;
