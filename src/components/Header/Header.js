// LIBS
import React from "react";
import { connect } from "react-redux";

// LIB: MATERIAL UI
import Button from "@material-ui/core/Button";

// STYLE
import "./HeaderStyle.scss";

// IMAGES
import menuImg from "../../img/menu.png";

function Navigation({ menuStatus, dispatch }) {
  const handleMenu = () => {
    if (menuStatus === false) {
      dispatch({ type: "MENU-OPEN" });
    } else {
      dispatch({ type: "MENU-CLOSE" });
    }
  };

  return (
    <Button className="navigation" onClick={handleMenu}>
      <img src={menuImg} alt="Navigation icon for menu." />
    </Button>
  );
}

const mapStateToProps = (state) => ({
  menuStatus: state.menuStatus.menu,
});

export default connect(mapStateToProps)(Navigation);
