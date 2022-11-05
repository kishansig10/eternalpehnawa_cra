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

const DeliveryPolicy = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.root}>
        Free shipping on all products in India. Once the order is placed, it
        takes 5 to 7 business days to dispatch after placing the order. Then 4
        to 5 business days for it to get delivered. So, the estimated time would
        be 10 to 15 working days. You will receive the tracking details once
        your order has been shipped. International shipping charges would be
        2500 (0.6 kg to 2 Kg). It takes around 10-12 business days for the
        delivery.
        <br />
        <br />
        <strong>HAPPY SHOPPING!</strong>
      </div>
    </>
  );
};

export default DeliveryPolicy;
