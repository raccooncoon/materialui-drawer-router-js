import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        {/*<Route exact path="/contact" render={props => <Contact {...props} />} />*/}
        {/*<Route exact path="/about" render={props => <About {...props} />} />*/}
      </Switch>
    </div>
  );
}
