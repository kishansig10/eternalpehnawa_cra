import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            no additional cost. If you don’t like the product, you need to place
            a return request from your account. We will arrange a pickup from
            your doorstep. Incase due to certain circumstances after raising the
            return request within 3 days you are unable to return the shipment,
            no refund would be made. Only credit note would be issued. Refund
            would be processed within 4 to 7 days after the product is received.
            <br />
            <br />
            <strong>HAPPY SHOPPING!</strong>
          </div>
        )}

        {page === "Delivery and Shipping" && (
          <div className={classes.root}>
            Free shipping on all products in India. -Once the order is placed,
            it takes 5 to 7 business days to dispatch after placing the order.
            Then 4 to 5 business days for it to get delivered. So, the estimated
            time would be 10 to 15 working days. You will receive the tracking
            details once your order has been shipped. International shipping
            charges would be 2500 (0.6 kg to 2 Kg). It takes around 10-12
            business days for the delivery.
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

        {page === "Privacy Policy" && (
          <div className={classes.root}>
            This Privacy Policy explains how Eternal Pehnawa collects, shares,
            and uses any information that relates to you when you use our Site,
            engage with us on social media, or otherwise interact with us (your
            “Personal Data”). This Privacy Policy also explains the rights you
            have concerning the Personal Data that we process and how you can
            exercise these rights.
            <ul>
              <li>
                <b>PRINCIPLES:</b>
                <br />
                EP manifests its commitment to privacy and data protection by
                embracing the following principles: -
                <ul>
                  <li>
                    EP uses Personal Data lawfully, fairly, and in a transparent
                    manner.
                  </li>
                  <li>
                    EP collects no more Personal Data than necessary, and only
                    for a legitimate purpose.
                  </li>
                  <li>
                    EP retains no more data than necessary or for a longer
                    period than needed.
                  </li>
                  <li>
                    EP protects Personal Data with appropriate security
                    measures.
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <b>YOUR PERSONAL INFORMATION</b>
                <br />
                When you transact at our online store, as part of the buying and
                selling process, we collect the personal information you provide
                us such as your name, date of birth, contact number, address,
                email address, and other information relevant to customer
                surveys and/or offers. When you browse our online store, we
                automatically receive your computer’s IP Address in order to
                provide us with information that helps us learn about your
                browser and operating system. We use this information for
                internal record keeping and may also use it to improve our
                products and services and to customize the website according to
                your interests. Email marketing: With your permission, we shall
                send you emails about our store, new products, and other
                updates.
              </li>
              <br />
              <li>
                <b>HOW DO YOU GET MY CONSENT?</b> <br />
                When you provide us with personal information to complete a
                transaction, verify your credit card, place an order, arrange
                for a delivery or return a purchase, we imply that you consent
                to our collecting it and using it for that specific reason only.
                If we ask for your personal information for a secondary reason,
                like marketing, we will either ask you directly for your
                expressed consent or provide you with an opportunity to say no.
                <a href="www.eternalpehnawa.com">www.eternalpehnawa.com</a> may
                change this policy occasionally by updating this page. You
                should check this page from time to time, to ensure that you are
                happy with any changes.
              </li>
              <br />
              <li>
                <b>HOW DO I WITHDRAW MY CONSENT?</b>
                <br />
                After opting in, if you change your mind, you may withdraw your
                consent for us to contact you, for the continued collection,
                use, or disclosure of your information, at any time, by
                contacting us at eternalpehnawa@gmail.com.
              </li>
              <br />
              <li>
                <b>DISCLOSURE</b> <br />
                We will not sell, distribute or disclose your personal
                information to third parties unless we have your permission or
                are required by law to do so or if you violate our Terms of
                Service.
              </li>
              <br />
              <li>
                <b>PAYMENT</b>
                <br />
                If you choose a direct payment gateway to complete your
                purchase, then Shopify stores your credit card data. It is
                encrypted through the Payment Card Industry Data Security
                Standard (PCI-DSS). Your purchase transaction data is stored
                only as long as is necessary to complete your purchase
                transaction. After that is complete, your purchase transaction
                information is deleted.
              </li>
              <br />
              <li>
                <b>DATA USE</b> <br />
                EP uses the collected data for various purposes:
                <ul>
                  <li>To provide and maintain our service</li>
                  <li>
                    To notify you about changes in policies and order details
                  </li>
                  <li>To provide customer support</li>
                  <li>
                    To gather analysis or valuable information so that we can
                    improve our Site and services
                  </li>
                  <li>To monitor the propriety of Site usage</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>
                    To provide you with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless you have opted not to
                    receive such information
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <b>DATA STORAGE, TRANSFER, and RETENTION</b>
                <br />
                Your consent to this Privacy Policy followed by your submission
                of such information represents your agreement to that transfer.
                EP will take all the steps reasonably necessary to ensure that
                your data is treated securely and in accordance with this
                Privacy Policy and no transfer of your Personal Data will take
                place to an organization unless there are adequate controls in
                place including the security of your data and other personal
                information. We will hold on to your information for as long as
                you continue to be a EP customer and for as long as we are
                required to keep it to ensure we meet our legal requirements
                across the globe
              </li>
              <br />
              <li>
                <b>DATA SECURITY</b>
                <br />
                The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </li>
              <br />
              <li>
                <b>CONTACT INFORMATION:</b>
                <br />
                If you would like to access, correct, amend or delete any
                personal information we have about you , or if there are any
                questions regarding this privacy policy, you may contact us
                using the information below: Email Address:
                eternalpehnawa@gmail.com
              </li>
            </ul>
            <br />
            <br />
            <strong>HAPPY SHOPPING!</strong>
          </div>
        )}
        {page === "Terms and Conditions" && (
          <div className={classes.root}>
            The Website Owner, (“www.eternalpehnawa.com” or “Eternal Pehnawa” or
            “we” or “us” or “our”) provides the information contained on the
            website or any of the pages comprising the website to visitors
            subject to the terms and conditions set out in these website terms
            and conditions, the privacy policy and any other relevant terms and
            conditions, policies and notices which may be applicable to a
            specific section or module of the website. Welcome to
            www.eternalpehnawa.com. If you continue to browse and use this
            website you are agreeing to comply with and be bound by the
            following terms and conditions of use, which together with our
            privacy policy govern www.eternalpehnawa.com’s relationship with you
            in relation to this website.
            <br />
            <br />
            The use of this website is subject to the following terms of use:
            <br />
            <ul>
              <li>
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </li>
              <li>
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness, or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </li>
              <li>
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services or information available through this website meet your
                specific requirements.
              </li>
              <li>
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice,
                which forms part of these terms and conditions.
              </li>
              <li>
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offense.
              </li>
              <li>
                From time to time this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information. They do not signify that we endorse
                the website. We have no responsibility for the content of the
                linked website.
              </li>
              <li>
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of India or other
                regulatory authority.
              </li>
            </ul>
          </div>
        )}

        {page === "Refund and Cancellations" && (
          <div className={classes.root}>
            <h4>Return and Exchange policy</h4>
            <ul>
              <li>
                We have a customer friendly 3 days return and 10 days exchange
                policy.
              </li>
              <li>
                If you have received the product in a bad condition or if the
                packaging is damaged, customer are requested to take picture and
                make video while opening a parcel. Also please email us at
                ethernalpehnawa@gmail.com mentioning your order ID.
              </li>
              <li>
                We will personally ensure that a brand new replacement is issued
                to you with no additional cost.
              </li>
              <li>
                If you don’t like the product, you need to place a return
                request from your account. We will arrange a pickup from your
                doorstep.
              </li>
              <li>
                Incase due to certain circumstances after raising the return
                request within 3 days you are unable to return the shipment, no
                refund would be made. Only credit note would be issued.
              </li>
              <li>
                Refund would be processed within 4 to 7 days after the product
                is received.
              </li>
            </ul>
            <br />

            <h4>Cancellation Policy</h4>
            <ul>
              <li>
                If you have to cancel an order, kindly do so before your order
                is shipped through your account.
              </li>
              <li>
                If you cancel your order before it is shipped, we will refund
                you the entire amount.
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default AboutComponent;
