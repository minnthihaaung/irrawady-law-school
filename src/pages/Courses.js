import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  let xsNum = 0;

  if (isUpMd) {
    xsNum = 3;
  } else if (isUpSm) {
    xsNum = 4;
  } else {
    xsNum = 12;
  }

  useEffect(() => {
    fetch("https://serene-shore-31305.herokuapp.com/api/v1/courses")
      .then((res) => res.json())
      .then((json) => {
        setCourses(json.courses);
      });
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Box>
        <Typography variant="h3" component="h1">
          Courses
        </Typography>
      </Box>
      <Grid container spacing={2} mt={1}>
        {courses.map((course, index) => {
          return (
            <Grid key={index} item xs={xsNum}>
              <Paper variant="outlined">
                <img
                  className="img"
                  src={
                    "https://serene-shore-31305.herokuapp.com" + course.image
                  }
                  alt="Pic"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" align="left" ml={2} mt={2}>
                    {course.name}
                  </Typography>
                  <Typography variant="body1" align="left" p={2} pb={0}>
                    {course.description}
                  </Typography>
                  <Box
                    sx={{
                      mt: 3,
                      alignSelf: "flex-end",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      disableRipple
                      sx={{
                        textTransform: "none",
                        width: "100%",
                        borderRadius: 0,
                      }}
                    >
                      Go to Class
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Courses;
