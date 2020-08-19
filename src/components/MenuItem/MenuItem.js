// LIBS
import React from "react";
import { connect } from "react-redux";

// LIB: MATERIAL UI
import Button from "@material-ui/core/Button";

// STYLE
import "./MenuItemStyle.css";

function MenuItem({ name, iconName, dispatch }) {
  return (
    <Button
      key={name}
      className="accordion-item"
      onClick={() => dispatch({ type: "PAGE", payload: { name } })}
    >
      <span className="accordion-item-icon-name">{iconName}</span>
      <span className="accordion-item-name">{name}</span>
    </Button>
  );
}

const mapStateToProps = (state) => ({
  menuStatus: state.menuStatus.menu,
});

export default connect(mapStateToProps)(MenuItem);
