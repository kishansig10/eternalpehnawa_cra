import { makeStyles } from "@mui/styles";
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    fontSize: "1.5rem",
    margin: "2rem auto",
    lineSpacing: "1rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    height: "auto",
    dispay: "flex",
    width: "60vw",
    fontSize: "1.5rem",
    margin: "2rem auto",
    lineSpacing: "1rem",
    "&::first-letter": {
      fontSize: "5rem",
      fontWeight: "bold",
    },
    "& a": {
      color: "#FC7500",
    },
    "& p": {
      wordBreak: "break-all",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "2rem 5rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 2rem",
    },
  },
}));

const ReturnPolicy = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <Navbar />
      <div className={classes.root}>
        We have a customer friendly 3 days return and 10 days exchange policy.
        If you have received the product in a bad condition or if the packaging
        is damaged, customer are requested to take picture and make video while
        opening a parcel. Also please email us at ethernalpehnawa@gmail.com
        mentioning your order ID. We will personally ensure that a brand new
        replacement is issued to you with no additional cost. If you don’t like
        the product, you need to place a return request from your account. We
        will arrange a pickup from your doorstep. Incase due to certain
        circumstances after raising the return request within 3 days you are
        unable to return the shipment, no refund would be made. Only credit note
        would be issued. Refund would be processed within 4 to 7 days after the
        product is received.
        <br />
        <br />
        <strong>HAPPY SHOPPING!</strong>
      </div>
    </>
  );
};

export default ReturnPolicy;
