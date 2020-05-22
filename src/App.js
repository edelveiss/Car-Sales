import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/Home";
import Car from "./components/Car";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { createStyles, fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const classes = useStyles();
  const handleFormChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              style={{ fontSize: "2rem" }}
            >
              Car Sales
            </Typography>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Link style={{ color: "white" }} to={"/"}>
                Home
              </Link>
            </IconButton>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={handleFormChange}
                placeholder="Search your car"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route path="/car/:carID">
          <Car cars={props.cars} />
        </Route>
        <Route path="/">
          <Home searchTerm={searchTerm} />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
export default connect(mapStateToProps, {})(App);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "16ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  })
);
