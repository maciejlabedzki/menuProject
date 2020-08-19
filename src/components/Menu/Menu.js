// LIBS
import React from "react";
import { connect } from "react-redux";

// LIB: MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import MuiContainer from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

// COMPONENTS
import MenuItem from "../MenuItem/MenuItem";

// STYLE
import "./MenuStyle.scss";

const Container = withStyles({
  root: {
    padding: "0",
    boxShadow: "1px 1px 20px black",
  },
})(MuiContainer);

const Accordion = withStyles({
  root: {
    background: "transparent",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    color: "white",
    position: "relative",
    margin: "0",
    padding: "0",
    paddingLeft: "62px",
    lineHeight: 37,
    minHeight: "37px",
    maxHeight: "37px",
    boxSizing: "border-box",
    "&$expanded": {
      minHeight: 37,
    },
  },
  content: {
    "&$expanded": {
      margin: "0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {},
}))(MuiAccordionDetails);

function Menu({ menuStatus, dataMenu }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      {menuStatus === true && (
        <Container className="menu-wrapper">
          {dataMenu !== null &&
            dataMenu.map((item, index) => (
              <Accordion
                key={item.displayText}
                square
                expanded={expanded === item.displayText}
                onChange={handleChange(item.displayText)}
              >
                <AccordionSummary
                  className="accordion-summary"
                  aria-controls={item.displayText + "-content"}
                  id={item.displayText + "-header"}
                >
                  <span className="accordion-title-icon">{item.iconName}</span>
                  <Typography className="accordion-title">
                    {item.displayText}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  <Grid container spacing={0}>
                    {item["nodes"]?.map((nodeItem) => (
                      <Grid item xs={4} key={nodeItem.displayText}>
                        <MenuItem
                          name={nodeItem.displayText}
                          iconName={nodeItem.iconName}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          {dataMenu === null && <div className="error-nodata">No data.</div>}
        </Container>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  menuStatus: state.menuStatus.menu,
  dataMenu: state.dataFetch.data,
});

export default connect(mapStateToProps)(Menu);
