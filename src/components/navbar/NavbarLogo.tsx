import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const useStyles = makeStyles({
  logoWrapper: {
    "&>a": {
      fontWeight: "700",
      textDecoration: "none",
      color: "#191919",
    },
  },
  logo: {
    height: "1em",
    width: "1em",
    fontSize: "5rem",
  },
});
const NavbarLogo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoWrapper}>
      <Link to="/">
        <Logo className={classes.logo} />
      </Link>
    </div>
  );
};

export default NavbarLogo;
