import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import Courses from "./pages/Courses";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PropTypes from "prop-types";

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/home">{children}</StaticRouter>;
  }

  return (
    <BrowserRouter initialEntries={["/home"]} initialIndex={0}>
      {children}
    </BrowserRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#00695c",
      light: "#439889",
      dark: "#003d33",
    },
    secondary: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div
          style={{
            minHeight: "100vh",
            marginBottom: 50,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/books" element={<Books />} />
            <Route path="/login" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
//

// 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
