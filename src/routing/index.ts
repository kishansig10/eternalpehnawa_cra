import SareeContainer from "../views/products/sarees/SareeContainer";
import AboutContainer from "../views/about/AboutContainer";
import HomeContainer from "../views/home/HomeContainer";
import ProductsContainer from "../views/products/ProductsContainer";
import SuitContainer from "../views/products/suits/SuitContainer";
import HomeDecorContainer from "../views/products/homeDecor/HomeDecorContainer";
import Category from "../components/categories/Category";
import ProductContainer from "../views/product/ProductContainer";
import CheckoutContainer from "../views/checkout/CheckoutContainer";
import MyAccountContainer from "../views/myAccount/MyAccountContainer";
import CheckoutStepperContainer from "../views/checkout-stepper/CheckoutStepperContainer";
import CategoriesContainer from "../views/categories/CategoriesContainer";
import Confirmation from "../components/checkout/Confirmation";
import DeliveryPolicy from "../views/about/DeliveryPolicy";
import ReturnPolicy from "../views/about/ReturnPolicy";

const routes = [
  {
    path: "/",
    component: HomeContainer,
    exact: true,
  },
  {
    path: "/about",
    component: AboutContainer,
  },
  {
    path: "/category",
    component: CategoriesContainer,
  },
  // {
  //   path: "/all-products/category/saree",
  //   component: SareeContainer,
  // },
  {
    path: "/all-products/category/:id",
    component: SuitContainer,
  },
  // {
  //   path: "/all-products/category/home-decor",
  //   component: HomeDecorContainer,
  // },
  {
    path: "/all-products/product/:id",
    component: ProductContainer,
  },
  {
    path: "/all-products",
    component: ProductsContainer,
  },
  {
    path: "/product",
    component: ProductsContainer,
  },
  {
    path: "/checkout",
    component: CheckoutStepperContainer,
  },
  {
    path: "/confirmation/:id",
    component: Confirmation,
  },
  {
    path: "/delivery_shipping",
    component: DeliveryPolicy,
  },
  {
    path: "/return_exchange",
    component: ReturnPolicy,
  }
];

export default routes;
