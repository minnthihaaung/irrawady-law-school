import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Home = () => (
  <Container sx={{ my: 5 }}>
    <Typography variant="h4" component="h2">
      Vision
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{ mt: 3, textAlign: "justify" }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </Typography>
    <Typography variant="h4" component="h2" sx={{ mt: 5 }}>
      Mission
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{ mt: 3, textAlign: "justify" }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </Typography>
    <Typography
      variant="body1"
      component="p"
      sx={{ mt: 3, textAlign: "justify" }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </Typography>
  </Container>
);

export default Home;
