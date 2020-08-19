import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { connect } from "react-redux";

import "./ModalStyle.scss";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: "#161616",
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: "0px 0px 20px 0px",
    fontFamily: "Roboto",
    color: "white",
    outline: "none",
  },
}));

function SimpleModal({ modalStatus, modal, dispatch }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Modal
      open={modalStatus}
      // onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 className="simple-modal-title">{modal?.title}</h2>
        <p className="simple-modal-description">{modal?.description}</p>
        <button
          className="simple-modal-button"
          onClick={() => dispatch({ type: "MODAL-CLOSE" })}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  modalStatus: state.modalHandle.modalStatus,
  modal: state.modalHandle.modal,
});

export default connect(mapStateToProps)(SimpleModal);
