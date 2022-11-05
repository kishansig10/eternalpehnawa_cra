import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Button, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { useEffect, useRef, useState } from "react";
import Category from "../../components/categories/Category";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Navbar from "../../components/navbar/Navbar";
import OurMission from "../../components/ourMission/OurMission";
import Testimonial from "../../components/testimonial/Testimonial";
import { bannerData } from "../../dummyData/bannerData.js";
import "./home.css";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme: any) => ({
  wrapper: {
    width: "80vw",
    backgroundColor: "#1E1100",
    margin: "2rem auto 0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "99vw",
    },
  },
  content: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
  },
  leftImg: {
    objectFit: "cover",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "75%",
    },
  },
  middleImg: {
    objectFit: "cover",
    width: "100%",
  },
  ctaWrapper: {
    width: "85vw",
    backgroundColor: "#DFC386",
    margin: "0 auto 0 auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
    "&>h2": {
      margin: 0,

      textTransform: "uppercase",
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.8rem",
      },
    },
    "&>h3": {
      textTransform: "uppercase",
      fontWeight: "bold",
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.25rem",
      },
    },
  },
  allProductsBtn: {
    width: "10rem",
    marginBottom: "1rem !important",
    backgroundColor: "#AA7B5F !important",
    "&:hover": {
      backgroundColor: "#c7a18a !important",
    },
  },
  scrollBtnContainer: {
    postion: "absolute",
    top: "100%",
    left: "50%",
  },
  nextBtn: {
    transform: "rotate(180deg)",
  },
  btnsContainer: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      boxShadow: "1px 1px 5px #000000",
      borderRadius: "100%",
      margin: "0.5rem",
      backgroundColor: "#fff",
    },
  },
}));

// TODO :: comonent modulization needs to be done
export const HomeComponent = () => {
  const length = bannerData.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeout = useRef(null);
  const classes = useStyles();

  const nextSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((currentSlide) =>
        currentSlide === length - 1 ? 0 : currentSlide + 1
      );
    };
    timeout.current = setTimeout(nextSlide, 1005000);
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [currentSlide, length]);

  // TODO :: To be used if we introduce next and prev buttons
  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  // TODO : Make it as a seperate component named BANNER

  return (
    <>
      <Navbar />
      <section className={classes.banner}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div
              style={{
                transform: "translateX(0px) translateZ(0px)",
              }}
            >
              <img
                src={
                  "https://res.cloudinary.com/cryptomonthly/image/upload/v1656232813/eternal_pehnawa/PHOTO-2022-06-15-13-45-49_xjfbqu.jpg"
                }
                style={{
                  transform: "translateX(-16px) translateY(16px)",
                }}
                className={classes.leftImg}
                alt=""
              />
            </div>
            <img
              src={
                "https://res.cloudinary.com/cryptomonthly/image/upload/v1656232812/eternal_pehnawa/PHOTO-2022-06-15-13-51-02_oizftu.jpg"
              }
              className={classes.middleImg}
              alt=""
            />
            <div
              style={{
                transform: "translateX(0px) translateZ(0px)",
              }}
            >
              <img
                src={
                  "https://res.cloudinary.com/cryptomonthly/image/upload/v1656232814/eternal_pehnawa/PHOTO-2022-06-15-13-45-14_2_cjlhzv.jpg"
                }
                style={{
                  transform: "translate(16px,25%)",
                }}
                className={classes.leftImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={classes.ctaWrapper}>
          <h2>Complete your Style</h2>
          <h3>Let us help you</h3>
          <Link to="/all-products" style={{ textDecoration: "none" }}>
            <Button variant="contained" className={classes.allProductsBtn}>
              All products
            </Button>
          </Link>
        </div>
      </section>
      {/* <section className={classes.banner}>
        {bannerData.map(
          (baner: { desc: string; img: string }, index: number) => (
            <div key={index}>
              {index === currentSlide && (
                <div className="container">
                  <div className="left">
                    <Typography color="initial" variant="h2">
                      {baner.desc}
                    </Typography>
                    <div className={classes.btnsContainer}>
                      <IconButton onClick={prevSlide}>
                        <ArrowBackIosRoundedIcon />
                      </IconButton>
                      <IconButton onClick={nextSlide}>
                        <ArrowBackIosRoundedIcon className={classes.nextBtn} />
                      </IconButton>
                    </div>
                  </div>

                  <div className="right">
                    <img src={baner.img} className="image" alt="" />
                  </div>
                </div>
              )}
            </div>
          )
        )}
        <div className={classes.scrollBtnContainer}>
          <section>
            <a href="#category" className="scroll-down"></a>
          </section>
        </div>
      </section> */}
      <Category />
      <OurMission />
      <FeaturedProducts />
      <Testimonial />
    </>
  );
};
