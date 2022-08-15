import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
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

const AboutComponent = () => {
  const location = useLocation();
  const classes = useStyles();
  const { page } = location?.state;

  return (
    <>
      <Navbar />
      <div className={classes.main}>
        {page && <Typography variant="h2">{page}</Typography>}

        {page === "Return and Exchanges" && (
          <div className={classes.root}>
            We have a customer friendly 3 days return and 10 days exchange
            policy. If you have received the product in a bad condition or if
            the packaging is damaged, customer are requested to take picture and
            make video while opening a parcel. Also please email us at
            ethernalpehnawa@gmail.com mentioning your order ID. We will
            personally ensure that a brand new replacement is issued to you with
            no additional cost. If you don’t like the product, you need to
            place a return request from your account. We will arrange a pickup
            from your doorstep. Incase due to certain circumstances after
            raising the return request within 3 days you are unable to return
            the shipment, no refund would be made. Only credit note would be
            issued. Refund would be processed within 4 to 7 days after the
            product is received.
            <br />
            <br />
            <strong>HAPPY SHOPPING!</strong>
          </div>
        )}

        {page === "Delivery and Shipping" && (
          <div className={classes.root}>
            Free shipping on all products in India. -Once the order is placed,
            it takes 5 to 7 business days to dispatch after placing the order.
            Then 4 to 5 business days for it to get delivered. So, the
            estimated time would be 10 to 15 working days. You will receive the
            tracking details once your order has been shipped. International
            shipping charges would be 2500 (0.6 kg to 2 Kg). It takes around
            10-12 business days for the delivery.
            <br />
            <br />
            <strong>HAPPY SHOPPING!</strong>
          </div>
        )}

        {page === "About Us" && (
          <div className={classes.root}>
            Eternal Pehnawa is an exclusive store providing a wide range of
            Indian ethnic wear. EP act as a connector between customer and
            artisans & craftsmen from all over India at your doorsteps. It
            offers you to the most beautiful and handcrafted India’s heritage
            products from corners of India like Banarasi, Maheshwari, Chanderi,
            Handlooms, Cotton, Ikkat, Linen, Khadis, Tussar, Mursidabad,
            Kalamkari, Block print and more. We revolutionize fashion among all
            age group women at addictive prices and unbeatable quality. EP is
            customer centric with aim to provide best possible services to our
            customers and also welcome new ideas and suggestions from our
            customer so we can grow enough to meet customer expectations.
            <br />
            <br />
            <strong>HAPPY SHOPPING!</strong>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutComponent;
