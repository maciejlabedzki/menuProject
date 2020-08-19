// LIBS
import React, { useEffect } from "react";
import { connect } from "react-redux";

// COMPONENTS
import Menu from "../Menu/Menu";
import Header from "../Header/Header";

// STYLE
import "./App.scss";

// TOOLS
import validateData from "../../tools/validateData";

function App({ dispatch }) {
  useEffect(() => {
    handleData();
    // eslint-disable-next-line
  }, []);

  const handleData = () => {
    fetch("http://localhost:3333/data")
      .then((response) => response.json())
      .then((jsonData) => {
        dispatch({ type: "LOADED", payload: validateData(jsonData) });
      })
      .catch((err) => {
        // error catch
      });
  };

  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
  );
}

export default connect()(App);
