import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { useTheme, useMediaQuery, Divider } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { matchPath, useLocation, Link } from "react-router-dom";
import logo from "../images/ils-logo.png";

const PAGES = [
  { text: "Home", route: "/" },
  { text: "Courses", route: "/courses" },
  { text: "Books", route: "/books" },
  { text: "Login", route: "/" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  }

  const routeMatch = useRouteMatch(["/", "/courses", "/books"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <AppBar
      position="static"
      sx={{
        pl: 0,
      }}
    >
      <Toolbar>
        {/* App icon */}
        <IconButton disableRipple component={Link} to="/">
          <img src={logo} alt="logo" className="logo" />
        </IconButton>
        {/* App name */}
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            ml: 3,
            fontWeight: 500,
            letterSpacing: ".3rem",
            textDecoration: "none",
            color: "inherit",
            textColor: "secondary",
            indicatorColor: "secondary",
          }}
        >
          Law School
        </Typography>

        {isMatch ? (
          <>
            <Tabs
              value={currentTab}
              indicatorColor="secondary"
              textColor="inherit"
              sx={{
                marginLeft: "auto",
              }}
            >
              <Tab label="Home" value="/" to="/" component={Link} />
              <Tab
                label="Courses"
                value="/courses"
                to="/courses"
                component={Link}
              />
              <Tab label="Books" value="/books" to="/books" component={Link} />
            </Tabs>

            <Button
              variant="outlined"
              size="small"
              color="inherit"
              component={Link}
              to="/"
              sx={{
                ml: 5,
              }}
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <Drawer open={drawerState} onClose={toggleDrawer(false)}>
              <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                sx={{ width: 200 }}
              >
                <List>
                  {PAGES.map((item, index) => (
                    <>
                      {item.text === "Login" ? (
                        <Divider variant="middle" />
                      ) : null}
                      <ListItem key={index} component={Link} to={item.route}>
                        <ListItemButton>
                          <ListItemText primary={item.text}></ListItemText>
                        </ListItemButton>
                      </ListItem>
                    </>
                  ))}
                </List>
              </Box>
            </Drawer>
            <IconButton
              color="inherit"
              sx={{ marginLeft: "auto" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
