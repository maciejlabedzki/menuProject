// LIBS
import React, { useEffect } from "react";
import { connect } from "react-redux";

// COMPONENTS
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

// STYLE
import "./App.scss";

// TOOLS
import validateData from "../../tools/validateData";

function App({ dispatch }) {
  useEffect(() => {
    // dispatch({
    //   type: "MODAL-OPEN",
    //   title: "Information",
    //   description: "Please wait. Loading...",
    // });

    handleData();
    // eslint-disable-next-line
  }, []);

  const handleData = () => {
    fetch("http://localhost:3333/data")
      .then((response) => response.json())
      .then((jsonData) => {
        dispatch({
          type: "MODAL-CLOSE",
        });
        dispatch({ type: "LOADED", payload: validateData(jsonData) });
      })
      .catch((err) => {
        dispatch({ type: "ERROR" });
        dispatch({
          type: "MODAL-OPEN",
          title: "Error",
          description: "Problem with the data. " + err,
        });
      });
  };

  return (
    <div className="App">
      <Header />
      <Menu />
      <Modal />
    </div>
  );
}

export default connect()(App);
