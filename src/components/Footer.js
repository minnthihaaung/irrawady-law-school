import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ width: "100%", position: "relative", bottom: 0 }}>
      <Box
        sx={{
          display: "flex",
          width: 1,
          height: 100,
          backgroundColor: "primary.dark",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "primary.contrastText",
            fontFamily: "Monospace",
          }}
        >
          &copy; Copyright to Mr. Mario
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
