import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //this useEffect run on given condition

  useEffect(() => {
    const unsubScribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //if user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //ther user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //for cleanup need return
      unsubScribe();
    };
  }, []);

  console.log("user is >>", user);

  return (

   //for router  //  
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
